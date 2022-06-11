import useSWR from "swr";
import { CompanyType, TimeslotDayType, TimeslotType } from "../types/timeslots";
import { TimeslotsResponse, TimeslotsResponseCompany, TimeslotsResponseTimeslot } from "../types/timeslotsResponse";

type HookResponse = {
  data: TimeslotsResponse;
  error: Error;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const groupTimeslots = (timeslots: TimeslotType[]): TimeslotDayType[] => {
  timeslots.sort((a, b) => a.startTime.getTime() - b.startTime.getTime());

  const hashedGroup = timeslots.reduce((hash, timeslot) => {
    const dateKey = timeslot.startTime.toDateString();
    hash[dateKey] = hash[dateKey] || { dayOfWeek: timeslot.startTime.getDay(), timeslots: [] };
    hash[dateKey].timeslots.push(timeslot);
    return hash;
  }, {} as Record<string, TimeslotDayType>);

  return Object.values(hashedGroup);
};

const transformTimeslots = (timeslots: TimeslotsResponseTimeslot[]): TimeslotType[] => {
  return timeslots.map((timeslot): TimeslotType => {
    return { startTime: new Date(timeslot.start_time), endTime: new Date(timeslot.end_time) };
  });
};

const transformCompany = (resCompany: TimeslotsResponseCompany): CompanyType => {
  const { id, name, type } = resCompany;
  const linierTimeslots = transformTimeslots(resCompany.time_slots);
  const groupedTimeslots = groupTimeslots(linierTimeslots);
  return { id, name, type, dates: groupedTimeslots };
};

export function useTimeslots() {
  const { data, error } = useSWR("/api/timeslots", fetcher) as HookResponse;

  const companies = data?.map((company) => transformCompany(company));
  console.log(companies);

  return {
    data: companies,
    error,
  };
}

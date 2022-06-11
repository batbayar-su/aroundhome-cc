import { SelectedTimeslotType, TimeslotType } from "../types/timeslots";

export const WEEKDAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const addZero = (time: number) => (time < 10 ? `0${time}` : time.toString());

const getHour = (date: Date) =>
  `${addZero(date.getHours())}:${addZero(date.getMinutes())}`;

export const getTimeRange = (timeslot?: TimeslotType, defaultValue = "") =>
  timeslot
    ? `${getHour(timeslot.startTime)} - ${getHour(timeslot.endTime)}`
    : defaultValue;

export const isTimeslotsMatch = (
  timeslot: TimeslotType,
  against?: TimeslotType
) =>
  against &&
  timeslot.startTime.getTime() === against.startTime.getTime() &&
  timeslot.endTime.getTime() === against.endTime.getTime();

export const isTimeslotsOverlap = (
  timeslot: TimeslotType,
  against?: TimeslotType
) =>
  against &&
  timeslot.endTime > against.startTime &&
  timeslot.startTime < against.endTime;

export const isTimeslotOverlapSelectedTimes = (
  timeslot: TimeslotType,
  selected: SelectedTimeslotType
) =>
  Object.values(selected).reduce((checker, selectedTime) => {
    return checker || !!isTimeslotsOverlap(timeslot, selectedTime);
  }, false);

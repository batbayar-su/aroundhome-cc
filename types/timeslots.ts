export type CompanyType = {
  id: number;
  name: string;
  type: string;
  dates: TimeslotDayType[];
};

export type TimeslotDayType = {
  dayOfWeek: number;
  timeslots: TimeslotType[];
};

export type TimeslotType = {
  startTime: Date;
  endTime: Date;
};

export type SelectedTimeslotType = Record<number, TimeslotType>;
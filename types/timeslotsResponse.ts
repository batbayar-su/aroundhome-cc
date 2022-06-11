export type TimeslotsResponse = TimeslotsResponseCompany[];

export type TimeslotsResponseCompany = {
  id: number;
  name: string;
  type: string;
  time_slots: TimeslotsResponseTimeslot[];
};

export type TimeslotsResponseTimeslot = {
  start_time: string;
  end_time: string;
};

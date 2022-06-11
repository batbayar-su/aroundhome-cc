import React from "react";
import style from "../../styles/style.module.css";
import { CompanyType, SelectedTimeslotType, TimeslotType } from "../../types/timeslots";
import { getTimeRange } from "../../utils/helper";
import Timeslot from "./Timeslot";

type Props = {
  data: CompanyType;
  selected: SelectedTimeslotType;
  onSelectedChange: (selected?: TimeslotType) => void;
};

export default function Company({ data, selected, onSelectedChange }: Props) {
  return (
    <div className={style.column}>
      <div className={style.companyName}>{data.name}</div>
      <div className={style.timeRange}>{getTimeRange(selected[data.id], 'Select time from below')}</div>
      <Timeslot data={data.dates} companyId={data.id} selected={selected} onSelectedChange={onSelectedChange} />
    </div>
  );
}

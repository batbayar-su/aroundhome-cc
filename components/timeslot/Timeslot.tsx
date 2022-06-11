import React, { useState } from "react";
import {
  SelectedTimeslotType,
  TimeslotDayType,
  TimeslotType,
} from "../../types/timeslots";
import style from "../../styles/style.module.css";
import {
  getTimeRange,
  isTimeslotsMatch,
  isTimeslotOverlapSelectedTimes,
  WEEKDAYS,
} from "../../utils/helper";

type Props = {
  data: TimeslotDayType[];
  companyId: number;
  selected: SelectedTimeslotType;
  onSelectedChange: (selected?: TimeslotType) => void;
};

export default function Timeslot({
  data,
  companyId,
  selected,
  onSelectedChange,
}: Props) {
  return (
    <>
      {data.map((day) => (
        <div key={day.dayOfWeek}>
          <div className={style.dayOfWeek}>{WEEKDAYS[day.dayOfWeek]}</div>
          <div>
            {day.timeslots.map((time) =>
              Time(time, companyId, selected, onSelectedChange)
            )}
          </div>
        </div>
      ))}
    </>
  );
}

const Time = (
  timeslot: TimeslotType,
  companyId: number,
  selected: SelectedTimeslotType,
  onSelectedChange: (selected?: TimeslotType) => void
) => {
  const isSelected = isTimeslotsMatch(timeslot, selected[companyId]);
  const overlapped =
    !isSelected && isTimeslotOverlapSelectedTimes(timeslot, selected);
  const selectedClass = isSelected ? style.selected : "";
  return (
    <button
      key={timeslot.startTime.getTime()}
      disabled={overlapped}
      className={`${style.timeRange} ${style.clickable} ${selectedClass}`}
      onClick={() => onSelectedChange(isSelected ? undefined : timeslot)}
    >
      {getTimeRange(timeslot)}
    </button>
  );
};

import React, { useState } from "react";
import Company from "./Company";
import style from "../../styles/style.module.css";
import {
  CompanyType,
  SelectedTimeslotType,
  TimeslotType,
} from "../../types/timeslots";

type Props = {
  data: CompanyType[];
};

const renderCompany = (
  company: CompanyType,
  selectedTimeslots: SelectedTimeslotType,
  setSelectedTimeslots: (selected?: TimeslotType) => void
) => {
  return (
    <Company
      key={company.id}
      data={company}
      selected={selectedTimeslots}
      onSelectedChange={setSelectedTimeslots}
    />
  );
};

export default function TimeslotContainer({ data }: Props) {
  const [selectedTimeslots, setSelectedTimeslots] = useState(
    {} as SelectedTimeslotType
  );

  return (
    <div className={style.flex}>
      {data.map((company) =>
        renderCompany(company, selectedTimeslots, (selected) =>
          setSelectedTimeslots({ ...selectedTimeslots, [company.id]: selected })
        )
      )}
    </div>
  );
}

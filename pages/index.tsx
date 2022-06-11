import type { NextPage } from "next";
import ErrorPage from "../components/ErrorPage";
import TimeslotContainer from "../components/timeslot/Container";
import { useTimeslots } from "../hooks/useTimeslot";

const Home: NextPage = () => {
  const { data, error } = useTimeslots();

  if (!data || error) {
    return <ErrorPage />;
  }

  return <TimeslotContainer data={data} />;
};

export default Home;

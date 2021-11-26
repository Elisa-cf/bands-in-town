import { useContext } from "react";
import MainDataContext from "../contexts/MainDataContext";
import { nanoid } from "nanoid";
import Cards from "./Cards";

const EventList = () => {
  const { data, handleSearchInput } = useContext(MainDataContext);

  return (
    <section>
      <h2>Latest Events</h2>
      {data
        .filter((item) => handleSearchInput(item))
        .map((result) => {
          return <Cards key={nanoid()} result={result} />;
        })}
    </section>
  );
};

export default EventList;

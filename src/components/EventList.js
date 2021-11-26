import { useContext } from "react";
import MainDataContext from "../contexts/MainDataContext";
import { nanoid } from "nanoid";
import Cards from "./Cards";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  width: 100%;
  flex-flow: wrap column;
  align-items: center;
  @media screen and (min-width: 860px) {
     {
      flex-flow: row wrap;
      justify-content: center;
      width: 80vw;
    }
  }
`;
const EventList = () => {
  const { data, handleSearchInput } = useContext(MainDataContext);

  return (
    <>
      <h2>Latest Events</h2>
      <Section>
        {data
          .filter((item) => handleSearchInput(item))
          .map((result) => {
            return <Cards key={nanoid()} result={result} />;
          })}
      </Section>
    </>
  );
};

export default EventList;

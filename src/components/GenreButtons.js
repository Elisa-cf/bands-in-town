import { nanoid } from "nanoid";
import { useContext } from "react";
import styled from "styled-components";
import MainDataContext from "../contexts/MainDataContext";

const Label = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  background: white;
  width: 15vw;
  max-width: 100px;
  margin: 10px 2px;
  padding: 13px;
  border: solid 2px;
  border-color: black;
  border-radius: 15px;
  :hover {
    font-weight: bold;
  }
`;

const Input = styled.input`
  position: absolute;
  left: -9999px;
  right: -9999px;
`;

const Section = styled.section`
  display: flex;
`;

const GenreButtons = () => {
  const { genres, setSelection, selection } = useContext(MainDataContext);

  const clickHandler = (index) => {
    setSelection(genres);

    const newSelection = [...selection];
    newSelection[index].isSelected = !newSelection[index].isSelected;
    setSelection(newSelection);
  };

  return (
    <Section>
      {genres.map((item, index) => {
        return (
          <Label key={nanoid()}>
            {item.genre}
            <Input
              type="checkbox"
              onChange={() => clickHandler(index)}
              checked={item.isSelected}
            />
          </Label>
        );
      })}
    </Section>
  );
};

export default GenreButtons;

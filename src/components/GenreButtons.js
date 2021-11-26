import { nanoid } from "nanoid";
import { useContext } from "react";
import styled from "styled-components";
import MainDataContext from "../contexts/MainDataContext";

const Input = styled.input`
  position: absolute;
  left: -9999px;
  right: -9999px;
`;

const Label = styled.label`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  background: grey;
  width: 15vw;
  max-width: 100px;
  margin: 10px;
  padding: 10px;
`;

const Section = styled.section`
  display: flex;
`;

const GenreButtons = () => {
  const { genres, setSelection, selection } = useContext(MainDataContext);

  const clickHandler = (index) => {
    const newSelection = [...selection];
    console.log(newSelection[index]);

    newSelection[index].isSelected = !newSelection[index].isSelected;
    setSelection(newSelection);
    console.log(newSelection);
  };

  return (
    <Section>
      {genres.map((item, index) => {
        return (
          <Label>
            {item.genre}
            <Input
              type="checkbox"
              key={nanoid()}
              onClick={() => clickHandler(index)}
              checked={item.isSelected}
            />
          </Label>
        );
      })}
    </Section>
  );
};

export default GenreButtons;

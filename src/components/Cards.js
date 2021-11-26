import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 300px;
  overflow: hidden;
  box-shadow: 0px 0px 15px -5px;
  border-radius: 3px;
  margin-top: 20px;
  :hover {
    box-shadow: 0px 0px 15px 0px;
  }
`;
const Image = styled.img`
  overflow: hidden;
  height: 250px;
`;

const Date = styled.input`
  margin: 10px 10px;
`;
const Button = styled.button``;
const Input = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Artist = styled.h3`
  text-align: left;
  padding-left: 15px;
`;
const Location = styled.h4`
  text-align: left;
  padding-left: 15px;
`;
const Cards = ({ result }) => {
  return (
    <Container>
      <Image src={result.img} />
      <form>
        <Input>
          <Date
            type="date"
            id="start"
            name="trip-start"
            value="2021-11-25"
            min="2021-01-01"
            max="2021-12-31"
            readOnly
          />
          <Button>Add to favorites</Button>
        </Input>
        <Artist>{result.artist}</Artist>
        <Location>{result.location}</Location>
      </form>
    </Container>
  );
};

export default Cards;

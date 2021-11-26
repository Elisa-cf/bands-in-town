import { useContext } from "react";
import MainDataContext from "../contexts/MainDataContext";
import styled from "styled-components";

const SearchBar = styled.input`
  border-radius: 15px;
  padding: 7px 5px;
  margin-bottom: 10px;
`;

const SearchBlock = styled.div`
  width: 100%;
  margin-bottom: 10px;
`;

const SearchInput = () => {
  const { setSearchInput, searchInput } = useContext(MainDataContext);

  function inputChangeHandler(e) {
    e.preventDefault();
    setSearchInput(e.target.value);
  }

  return (
    <>
      <form>
        <SearchBlock>
          {!searchInput && <i className="fas fa-search"></i>}
          <SearchBar
            type="text"
            value={searchInput}
            onChange={(e) => inputChangeHandler(e)}
          />
        </SearchBlock>
      </form>
    </>
  );
};

export default SearchInput;

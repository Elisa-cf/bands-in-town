import styled from "styled-components";
import GenreButtons from "./GenreButtons";
import SearchInput from "./SearchInput";


const Logo = styled.img`
display: flex;
align-self: 'flex-start';
width: '10vw';
background-color: 'offWhite';
`

const Header = () => {
    const logoUrl = "https://i.ibb.co/jr3gNJd/Screenshot-2021-11-25-at-23-38-57.png"

    return (
        <header>
            <Logo src={logoUrl} className="logo" alt="logo-img" />
            <SearchInput />
            <GenreButtons />
        </header>
    )
};

export default Header;
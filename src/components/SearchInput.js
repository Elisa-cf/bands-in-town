import { useContext } from "react"
import MainDataContext from "../contexts/MainDataContext"

const SearchInput = () => {

    const { setSearchInput, searchInput } = useContext(MainDataContext);

    function inputChangeHandler(e) {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    return (
        <>
            <form>
                <input type="text" value={searchInput} onChange={(e) => inputChangeHandler(e)} />
            </form>
        </>
    )
}

export default SearchInput;
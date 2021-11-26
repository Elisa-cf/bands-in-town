import { nanoid } from "nanoid";
import { useContext } from "react";
import MainDataContext from "../contexts/MainDataContext";


const GenreButtons = () => {
    const { genres, setSelection } = useContext(MainDataContext)
    
    const clickHandler = (index) => {
        const newSelection = [...genres];
        
       newSelection[index].isSelected = !newSelection[index].isSelected;
       setSelection(newSelection);
       console.log(newSelection)
    };
    

    return (
        <>
            {
                genres.map((item, index) => {
                    return (
                        <button key={nanoid()} onClick={() => clickHandler(index)} checked={item.isSelected} >
                            {item.genre}
                        </button>
                    )
                })
            }
        </>
    )
}

export default GenreButtons;
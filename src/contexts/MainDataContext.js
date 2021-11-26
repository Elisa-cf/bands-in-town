import { createContext, useState} from "react";


const MainDataContext = createContext();

const MainDataContextProvider = ({children}) => {
    const [ searchInput, setSearchInput ] = useState('');


    const data = [
        {
            artist: "Peggy Gou",
            date: "Dec. 3rd, 2021, 11:59 PM",
            location: "Sala Apolo, Carrer Nou de la Rambla, 113, Barcelona, Spain",
            genre: "Korean Pop",
            img: "https://photos.bandsintown.com/thumb/8659446.jpeg",
            summary: "Peggy Gou Barcelona, Spain Sala Apolo Korean Pop",
            isFavorite: false
        },
        
        {
            artist: "Veil of Maya",
            date: "Feb. 17th, 2022, 7:00 PM",
            location: "Razzmatazz, Almogàvers 122, Barcelona, Spain",
            genre: "Metal",
            img: "https://photos.bandsintown.com/thumb/10364495.jpeg",
            summary: "Veil of Maya Barcelona Spain Metal",
            isFavorite: false
        },
        {
            artist: "GHOST",
            date: "May. 7th, 2022, 7:00 PM",
            location: "Palau Olímpic De Badalona , Carrer de Ponent, Badalona, Spain",
            genre: "Heavy Metal, Metal",
            img: "https://photos.bandsintown.com/thumb/11023802.jpeg",
            summary: "GHOST Badalona Spain Heavy Metal, Metal",
            isFavorite: false
        },
        {
            artist: "KALEO",
            date: "Jan. 11th, 2022,7:00 PM",
            location: "Razzmatazz ,Almogàvers 122, Barcelona, Spain",
            genre: "Indie, Blues, Rock",
            img: "https://photos.bandsintown.com/thumb/11107475.jpeg",
            summary: "KALEO Barcelona, Spain Indie, Blues, Rock",
            isFavorite: true
        },
        {
            artist: "Laurent Voulzy",
            date: "November 26th 2021, 8:00 pm",
            location: "Eglise Saint-Joseph , Rue de Lunéville Pontivy France",
            genre: "alternative",
            img: "https://photos.bandsintown.com/thumb/8069630.jpeg",
            summary: "Laurent Voulzy Rue de Lunéville Pontivy France alternative",
            isFavorite: false
        },
        {
            artist: "Suzane",
            date: "November 26th 2021, 8:00 pm",
            location: "Le SEW plateforme culturelle à Morlaix , ter Quai du Léon, Morlaix, France",
            img: "https://photos.bandsintown.com/thumb/10188323.jpeg",
            genre: "pop",
            summary: "Suzane Morlaix, France pop",
            isFavorite: true,
        },
        {
            artist: "Jaimi Faulkner",
            date: "November 26th 2021, 4:30 pm",
            location: "Frohnstraße, Mohnheim am Rhein, Germany",
            img: "https://cdn.pixabay.com/photo/2015/05/07/11/02/guitar-756326_960_720.jpg",
            genre: "rock",
            summary: "Jaimi Faulkner Mohnheim am Rhein, Germany rock",
            isFavorite: false
        },
        {
            artist: "Spass",
            date: "January 6th 2022, 8:00 pm",
            location: "Cafe Hahn, Neustraße 15, Coblenz, Germany",
            img: "https://cdn.pixabay.com/photo/2018/01/25/17/48/fantasy-3106688_960_720.jpg",
            genre: "alternative",
            summary: "Spass Cafe Hahn Coblenz, Germany alternative",
            isFavorite: false,
        }
    ];

    const genres = [
        {
            genre: "Pop",
            isSelected: false,
        },

        {
            genre: "Metal",
            isSelected: false,
        },
        {
            genre: "Rock",
            isSelected: false,
        },
        {
            genre: "Alternative",
            isSelected: false,
        },

    ];

    const [selection, setSelection] = useState([])
    
    const handleSearchInput = (item) => {
        let isIncluded = [];
        const genresFilter = genres.filter(musicGenre => musicGenre.isSelected);
        genresFilter.filter(element => {
           return isIncluded.push(element.genre.toUpperCase() ? item.genre.toUpperCase().includes(element.genre): true);
        })
        isIncluded.push(searchInput ? item.summary.toUpperCase().includes(searchInput.toUpperCase()) : true);
        return isIncluded.every(e => e)
    }
    

    return (
        <MainDataContext.Provider value={{  data: data,
                                            searchInput: searchInput,
                                            setSearchInput: setSearchInput,
                                            handleSearchInput: handleSearchInput,
                                            genres: genres,
                                            selection: selection,
                                            setSelection: setSelection }} >
            {children}
        </MainDataContext.Provider>
    )
}

export { MainDataContextProvider };
export default MainDataContext;

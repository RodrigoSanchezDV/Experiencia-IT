import { useState, useContext } from "react";
import { apiService } from "../API/service";
import { SearchContext } from "../context/searchContext";

//* recibe en typeOfSearch => que voy a buscar (vacantes, empleados, postulantes, etc..)
export default function SearchBar({typeOfSearch}) {
  const [searchTerm, setSearchTerm] = useState(""); 
  const {setFoundInfo} = useContext(SearchContext)


  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
  };

  const onSearch = async() =>{
    const searchResponse = await apiService.onSearch(searchTerm, typeOfSearch)
    setFoundInfo(searchResponse.data)
  }


  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        />
        <button onClick={onSearch}>Buscar</button>
     
    </div>
  );
}

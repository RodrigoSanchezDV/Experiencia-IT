import { createContext} from "react"
import { useState } from "react"

export const SearchContext = createContext()

const SearchContextComponent = ({children}) => {
const [found, setFound] = useState(JSON.parse(localStorage.getItem("foundInfo"))||[])

const setFoundInfo = (info)=>{
setFound(info)
localStorage.setItem("foundInfo", JSON.stringify(found))
}

const cleanFoundInfo =()=>{
    setFound([])
    localStorage.removeItem("foundInfo")
}

const data = {
    found,
    setFoundInfo,
    cleanFoundInfo
}
return (
    <SearchContext.Provider value={data}>
        {children}
    </SearchContext.Provider>
)
}

export default SearchContextComponent
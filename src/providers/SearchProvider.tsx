import { createContext } from "react";
import { SearchContextType } from "../types/SearchTypes";


const SearchContext = createContext<SearchContextType | null>(null);
const SearchProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const search = () => {
        
    }
    return(
        <SearchContext.Provider value={{search}}>
            {children}
        </SearchContext.Provider>
    );
}
export default SearchProvider;
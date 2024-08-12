import { createContext, useState } from "react";
import { PaginationContextType } from "../types/PaginationTypes";


export const PaginationContext = createContext<PaginationContextType | null>(null);
const PaginationProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(5);
    const offset = () => {
        
    }
    return(
        <PaginationContext.Provider value={{offset, total, setTotal, page, setPage}}>
            {children}
        </PaginationContext.Provider>
    );
}
export default PaginationProvider;
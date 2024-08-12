import { Dispatch, SetStateAction } from "react";

type PaginationContextType = {
    offset: () => void;
    total:number, 
    setTotal: Dispatch<SetStateAction<number>>, 
    page: number, 
    setPage: Dispatch<SetStateAction<number>>;
}
export {type PaginationContextType}
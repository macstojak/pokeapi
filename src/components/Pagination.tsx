import { useContext } from "react";
import { PaginationContext } from "../providers/PaginationProvider";
import { PaginationContextType } from "../types/PaginationTypes";
import { usePagination } from "../hooks/usePagination";

export default function Pagination() {
    const paginationContext = useContext<PaginationContextType | null>(PaginationContext);
    const pagination = usePagination({totalCount:100, pageSize: 5, currentPage: 1, siblingCount: 5});
    if(!paginationContext) return <div>No pagination context</div>;
    const {page, offset, setPage, setTotal, total} = paginationContext;
    if(!pagination) return <div>No pagination provided</div>
    const pageAmmount = total / 20;

    return(
        <div className="pagination">
            {pagination}
        </div>
    );
}
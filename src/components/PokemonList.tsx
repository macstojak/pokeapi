import { useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { Pokemon, PokemonResponse } from "../types/PokemonTypes";
import { PaginationContext } from "../providers/PaginationProvider";
import { PaginationContextType } from "../types/PaginationTypes";


export default function PokemonList() {
    const {data, loading} = useFetch<PokemonResponse>("https://pokeapi.co/api/v2/pokemon/?limit=20");
    const paginationContext = useContext<PaginationContextType | null>(PaginationContext);
    useEffect(() => {
        if(!paginationContext) return;
        paginationContext.setTotal(data?.count ?? 5);

    }, [data, paginationContext])
    if(!data) return <div>No pokemon, check your Internet connection</div>
    if(loading) return <div className="loader"></div>
    return (
        <div>
            <ul className="pokemon-wrapper">
                {data.results.map((p: Pokemon, idx) => (<li key={idx+p.name} className="pokemon">
                    {p.name}
                </li>))}
            </ul>
        </div>
    )
}
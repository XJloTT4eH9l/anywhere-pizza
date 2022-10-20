import { useContext } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

export default function SnacksPage() {
    const { snacks, sortProducts } = useContext(AnywherePizzaContext);
    return (
        <Catalog 
            title="Закуски" 
            data={snacks} 
            sortFunction={sortProducts} 
        /> 
    )
}
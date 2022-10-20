import { useContext } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

export default function SaucesPage() {
    const { sauces, sortProducts } = useContext(AnywherePizzaContext);
    return (
        <Catalog 
            title="Соуси"
            data={sauces} 
            sortFunction={sortProducts}
        />
    )
}
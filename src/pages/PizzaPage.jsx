import { useContext } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

export default function PizzaPage() {
    const { pizza, sortProducts } = useContext(AnywherePizzaContext);
    return (
        <Catalog 
            title="Піцца"
            data={pizza}
            sortFunction={sortProducts}
        />
    )
}
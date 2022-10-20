import { useContext } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

export default function SushiPage() {
    const { sushi, sortProducts } = useContext(AnywherePizzaContext);
    return (
        <Catalog 
            title="Суші"
            data={sushi}
            sortFunction={sortProducts}
        />
    )
}
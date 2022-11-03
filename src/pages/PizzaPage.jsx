import { useContext, useEffect } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

export default function PizzaPage() {
    const { pizza, sortProducts } = useContext(AnywherePizzaContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Catalog 
            title="Піцца"
            data={pizza}
            sortFunction={sortProducts}
        />
    )
}
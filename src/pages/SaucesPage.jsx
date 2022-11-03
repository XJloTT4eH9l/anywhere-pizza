import { useContext, useEffect } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

export default function SaucesPage() {
    const { sauces, sortProducts } = useContext(AnywherePizzaContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Catalog 
            title="Соуси"
            data={sauces} 
            sortFunction={sortProducts}
        />
    )
}
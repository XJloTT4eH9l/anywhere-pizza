import { useContext, useEffect } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

function DrinksPage() {
    const { drinks, sortProducts } = useContext(AnywherePizzaContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Catalog 
            title="Напої" 
            data={drinks} 
            sortFunction={sortProducts}
        />
    )
}

export default DrinksPage;
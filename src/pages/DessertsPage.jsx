import { useContext, useEffect } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

function DessertsPage() {
    const { desserts, sortProducts } = useContext(AnywherePizzaContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Catalog 
            title="Десерти" 
            data={desserts} 
            sortFunction={sortProducts}
        />
    )
}

export default DessertsPage;
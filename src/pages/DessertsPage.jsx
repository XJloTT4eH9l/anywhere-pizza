import { useContext } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

function DessertsPage() {
    const { desserts, sortProducts } = useContext(AnywherePizzaContext);
    return (
        <Catalog 
            title="Десерти" 
            data={desserts} 
            sortFunction={sortProducts}
        />
    )
}

export default DessertsPage;
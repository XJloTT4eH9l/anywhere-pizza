import { useContext } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

function ComboPage() {
    const { combo, sortProducts } = useContext(AnywherePizzaContext);
    return (
        <Catalog 
            title="Комбо" 
            data={combo} 
            sortFunction={sortProducts}
        />
    )
}

export default ComboPage;
import { useContext, useEffect } from "react";
import Catalog from "../components/Catalog/Catalog";
import { AnywherePizzaContext } from "../context";

function ComboPage() {
    const { combo, sortProducts } = useContext(AnywherePizzaContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Catalog 
            title="Комбо" 
            data={combo} 
            sortFunction={sortProducts}
        />
    )
}

export default ComboPage;
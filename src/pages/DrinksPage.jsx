import { useContext } from "react";

import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";

import { AnywherePizzaContext } from "../context";

function DrinksPage() {
    const { drinks, sortProducts } = useContext(AnywherePizzaContext);
    return (
        <section className="homepage">
            <div className="container">
                <div className="homepage__inner">
                    <>
                    <div className="d-flex">
                            <h2 className="title">Напої</h2>
                            <Filter />
                    </div>
                        <div className="catalog">
                           {sortProducts(drinks).map(item => {
                                return (
                                    <Card 
                                        key= {item.id}
                                        {...item} 
                                    />
                                )
                           })}
                        </div>
                    </>
                </div>
            </div>
        </section>
    )
}

export default DrinksPage;
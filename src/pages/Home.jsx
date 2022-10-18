import { useContext } from "react";

import Categories from "../components/Categories/Categories";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";

import { AnywherePizzaContext } from "../context";

function Home() {
    const { pizza, onCartAdded, sortProducts } = useContext(AnywherePizzaContext);

    return (
        <section className="homepage">
            <div className="container">
                <div className="homepage__inner">
                    <Categories />
                    <>
                        <div className="homepage__top">
                            <h2 className="title">Піца</h2>
                            <Filter />
                        </div>
                        <div className="catalog">
                           {sortProducts(pizza).map(item => {
                                return (
                                    <Card 
                                        key= {item.id}
                                        onCartAdded={onCartAdded}
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

export default Home;
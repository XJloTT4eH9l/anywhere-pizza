import { useContext } from "react";

import Categories from "../components/Categories/Categories";
import Card from "../components/Card/Card";

import { AnywherePizzaContext } from "../context";

function Home() {
    const { pizza } = useContext(AnywherePizzaContext);

    return (
        <section className="homepage">
            <div className="container">
                <div className="homepage__inner">
                    <Categories />
                    <>
                        <h2 className="title">Піца</h2>
                        <div className="catalog">
                           {pizza.map(item => {
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

export default Home;
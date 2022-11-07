import { useContext, useEffect } from "react";

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import { PizzaCard } from "../components/Card/Card";
import Mailing from "../components/Mailing/Mailing";

import { AnywherePizzaContext } from "../context";

function Home() {
    const { pizza } = useContext(AnywherePizzaContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <section className="homepage">
            <div className="container">
                <div className="homepage__inner">
                    <Hero />
                    <Categories />
                    <>
                        <h2 className="title">Піца</h2>
                        <div className="catalog">
                           {pizza.map(item => {
                                return (
                                    <PizzaCard 
                                        key= {item.id}
                                        {...item} 
                                    />
                                )
                           })}
                        </div>
                    </>
                    <Mailing />
                </div>
            </div>
        </section>
    )
}

export default Home;
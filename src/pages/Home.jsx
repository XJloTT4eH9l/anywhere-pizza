import { useContext } from "react";

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import Card from "../components/Card/Card";
import Mailing from "../components/Mailing/Mailing";

import { AnywherePizzaContext } from "../context";

function Home() {
    const { pizza } = useContext(AnywherePizzaContext);

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
                                    <Card 
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
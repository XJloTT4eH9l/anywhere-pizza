import { useContext, useEffect } from "react";

import Hero from "../components/Hero/Hero";
import Categories from "../components/Categories/Categories";
import { PizzaCard } from "../components/Card/Card";
import { PizzaPlaceholder } from "../components/CardPlaceholder/CardPlaceholder";
import Mailing from "../components/Mailing/Mailing";

import { AnywherePizzaContext } from "../context";

function Home() {
    const { pizza, isloading } = useContext(AnywherePizzaContext);

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
                            {
                                isloading ? (
                                    [...new Array(10)].map((_, index) => <PizzaPlaceholder key={index}/>)
                                ) : (
                                    pizza.map(item => {
                                        return (
                                            <PizzaCard 
                                                key= {item.id}
                                                {...item} 
                                            />
                                        )
                                    })
                                )
                            }
                        </div>
                    </>
                    <Mailing />
                </div>
            </div>
        </section>
    )
}

export default Home;
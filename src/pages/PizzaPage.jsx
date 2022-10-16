import { useContext } from "react";
import Card from "../components/Card/Card";
import { AnywherePizzaContext } from "../context";

function PizzaPage() {
    const { pizza } = useContext(AnywherePizzaContext);
    return (
        <section className="homepage">
            <div className="container">
                <div className="homepage__inner">
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

export default PizzaPage;
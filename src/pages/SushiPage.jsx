import { useContext } from "react";
import Card from "../components/Card/Card";
import Filter from "../components/Filter/Filter";
import { AnywherePizzaContext } from "../context";

function SushiPage() {
    const { sushi, sortProducts } = useContext(AnywherePizzaContext);
    return (
        <section className="homepage">
            <div className="container">
                <div className="homepage__inner">
                    <>
                        <div className="d-flex">
                            <h2 className="title">Суші</h2>
                            <Filter />
                        </div>
                        <div className="catalog">
                           {sortProducts(sushi).map(item => {
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

export default SushiPage;
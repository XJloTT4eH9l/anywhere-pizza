import { useContext } from "react";
import { Card, PizzaCard } from "../Card/Card";
import { CardPlaceholder, PizzaPlaceholder } from "../CardPlaceholder/CardPlaceholder";
import { AnywherePizzaContext } from "../../context";
import Sorting from "../Sorting/Sorting";

function Catalog({ title, data, sortFunction }) {
    const { isloading } = useContext(AnywherePizzaContext);
    return (
        <section className="page">
            <div className="container">
                <div className="d-flex">
                    <h2 className="title">{title}</h2>
                    <Sorting />
                </div>
                <div className="catalog">
                    {
                        isloading ? (
                            title === 'Піцца' ? [...new Array(6)].map((_, index) => <PizzaPlaceholder key={index}/>) : [...new Array(6)].map((_, index) => <CardPlaceholder key={index}/>)
                        ) : (
                            sortFunction(data).map(item => {
                                return (
                                    title === 'Піцца' ? <PizzaCard key= {item.id} {...item} /> : <Card key= {item.id} {...item} />
                                )
                            })
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Catalog;
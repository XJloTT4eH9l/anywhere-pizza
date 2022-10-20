import Card from "../Card/Card";
import Sorting from "../Sorting/Sorting";

function Catalog({ title, data, sortFunction }) {
    return (
        <section className="page">
            <div className="container">
                <div className="d-flex">
                    <h2 className="title">{title}</h2>
                    <Sorting />
                </div>
                <div className="catalog">
                    {sortFunction(data).map(item => {
                        return (
                            <Card 
                                key= {item.id}
                                {...item} 
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Catalog;
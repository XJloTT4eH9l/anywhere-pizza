import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AnywherePizzaContext } from "../context";

import OrderItem from "../components/OrderItem/OrderItem";
import Notification from "../components/Notification/Notification";

function OrdersPage() {
    const { orders, setNavLinkActive } = useContext(AnywherePizzaContext);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <section className="container-short">
            {
                orders.length > 0 ? (
                    <>
                        <h2 className="title">Замовлення</h2>
                        <div className="orders">
                            {
                                orders.map(order =>{
                                    return (
                                        <OrderItem 
                                            key={order.id}
                                            id={order.id}
                                            address={order.address}
                                            summary={order.summary}
                                            products={order.products}
                                        />
                                    )
                                })
                            }
                        </div>
                    </>
                ) : (
                    <Notification
                        title='Замовлень немає'
                        deskr='Для того щоб зробити замовлення додайте товар в корзину'
                        imgSrc='img/empty-cart.webp' 
                    >   
                        { <Link to='/anywhere-pizza/' className='notification__btn' onClick={() => setNavLinkActive(null)}>На головну</Link> } 
                    </Notification>
                )
            }
        </section>
    )
}

export default OrdersPage;
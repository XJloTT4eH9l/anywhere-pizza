import { useContext } from "react";
import { Link } from "react-router-dom";
import { AnywherePizzaContext } from "../context";

import Notification from "../components/Notification/Notification";
import CartItem from "../components/CartItem/CartItem";
import SliderCards from "../components/SliderCards/SliderCards";
import Form from "../components/Form/Form";

function CartPage() {
    const {cartItems, onCartAdded, getCartSummary, sauces, snacks, orderDone, ordersId} = useContext(AnywherePizzaContext);

    return (
        <section className="container-short">
            {cartItems.length > 0 ? (
                <>
                    <h1 className="title">Ваше замовлення</h1>
                    <div className="cart__items">
                        {
                            cartItems.map(item => {
                                return(
                                    <CartItem
                                        key={item.id}
                                        id={item.id}
                                        title={item.title}
                                        imgSrc={item.imgUrl}
                                        price={item.price}
                                        onCartAdded={onCartAdded}
                                        counter={item.counter}
                                    />
                                )
                            })
                        }
                    </div>
                    <span className='container-short__summ'>Разом: {getCartSummary()} грн</span>
                    <h3 className="container-short__title">Додати до замовлення?</h3>
                    <SliderCards title={'Соуси'} products={sauces} />
                    <SliderCards title={'Закуски'} products={snacks} />
                    <Form />
                </>
            ) : (
                <Notification
                    title={orderDone ? `Замовлення №${ordersId - 1} прийнято` : 'Кошик порожній'}
                    deskr={orderDone ? 'Дякуємо за замовлення! Приблизний час доставки 45 хвилин': 'Додайте хоча б один товар в корзину для того щоб зробити замовлення'}
                    imgSrc={orderDone ? 'img/order.png' :'img/empty-cart.webp'}
                >
                    { <Link to='/anywhere-pizza/' className='notification__btn'>На головну</Link> } 
                </Notification>
            )
            }
        </section>
    )
}

export default CartPage;
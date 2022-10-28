import { useContext } from "react";
import { AnywherePizzaContext } from "../context";

import Notification from "../components/Notification/Notification";
import CartItem from "../components/CartItem/CartItem";
import SliderCards from "../components/SliderCards/SliderCards";

function CartPage() {
    const {cartItems, onCartAdded, getCartSummary, sauces, snacks} = useContext(AnywherePizzaContext);

    return (
        <section className="cart">
            <div className="container">
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
                        <span className='cart__summ'>Разом: {getCartSummary()} грн</span>
                    </>
                ) : (
                    <Notification
                        title='Корзина порожня'
                        deskr='Додайте хоча б один товар в корзину для того щоб зробити замовлення'
                        imgSrc='img/empty-cart.webp'
                    />
                )
                }
                <h3 className="cart__title">Додати до замовлення?</h3>
                <SliderCards title={'Соуси'} products={sauces} />
                <SliderCards title={'Закуски'} products={snacks} />
            </div>
        </section>
    )
}

export default CartPage;
import './SideCart.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SideCartItem from "../SideCartItem/SideCartItem";
import Notification from '../Notification/Notification';
import { AnywherePizzaContext } from '../../context';

function SideCart() {
    const { isCartOpen, setIsCartOpen, cartItems, setCartItems, onCartAdded, getCartSummary, setNavLinkActive } = useContext(AnywherePizzaContext);

    function onCartClose() {
        setIsCartOpen(false);
    }

    return (
        <div className={isCartOpen ? 'overlay overlay--active' : 'overlay'}>
            <aside className={isCartOpen ? 'side-cart side-cart--active' : 'side-cart'}>
                <div className="side-cart__content">
                    <div className="side-cart__top">
                        <h2 className="side-cart__heading">Ваше замовлення</h2>
                        <button className="side-cart__close-btn" onClick={onCartClose}><img src='img/close.png' alt='close cart' /></button>
                    </div>
                        {
                            cartItems.length > 0 ? (
                                <>
                                <div className='side-cart__cart-clear'>
                                    <button className='btn side-cart__btn-clear' onClick={() => setCartItems([])}>Очистити корзину</button>
                                </div>
                                    <div className="side-cart__items"> 
                                        {
                                            cartItems.map(item => {
                                                return (
                                                    <SideCartItem
                                                        key={item.activeSize ? item.id + item.activeSize + item.type : item.title + ' ' + item.id}
                                                        id={item.id}
                                                        title={item.title}
                                                        imgSrc={item.imgUrl}
                                                        price={item.price}
                                                        onCartAdded={onCartAdded}
                                                        counter={item.counter}
                                                        activeSize={item.activeSize}
                                                        type={item.type}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                    <div className="side-cart__bottom">
                                        <span className='side-cart__price'>Разом: {getCartSummary()} грн</span>
                                        <Link 
                                            to='/anywhere-pizza/cart'
                                            className='side-cart__button' 
                                            onClick={() => {
                                                setIsCartOpen(false);
                                                setNavLinkActive(null);
                                            }}>
                                                Оформити замовлення
                                        </Link>
                                    </div>
                                </>
                            ): (
                                <Notification
                                    title='Кошик порожній'
                                    deskr='Додайте хоча б один товар в корзину для того щоб зробити замовлення'
                                    imgSrc='img/empty-cart.webp'
                                >
                                    { <button className='notification__btn' onClick={onCartClose}>Повернутись до каталогу</button> }
                                </Notification> 
                            )
                        }
                    
                </div>
            </aside>
        </div>
    )
}

export default SideCart;
import './SideCart.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SideCartItem from "../SideCartItem/SideCartItem";
import Notification from '../Notification/Notification';
import { AnywherePizzaContext } from '../../context';

function SideCart() {
    const { isCartOpen, setIsCartOpen, cartItems, onCartAdded, getCartSummary, setNavLinkActive } = useContext(AnywherePizzaContext);

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
                                    <div className="side-cart__items"> 
                                        {
                                            cartItems.map(item => {
                                                return (
                                                    <SideCartItem
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
                                    <div className="side-cart__bottom">
                                        <span className='side-cart__price'>Разом: {getCartSummary()} грн</span>
                                        <Link 
                                            to='/cart'
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
                                    title='Корзина порожня'
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
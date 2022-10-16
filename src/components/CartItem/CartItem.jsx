import './CartItem.scss';
import { useContext } from 'react';
import { AnywherePizzaContext} from '../../context';

function CartItem({ id, imgSrc, title, price, counter }) {
    const { onClickMinus, onClickPlus } = useContext(AnywherePizzaContext);

    return (
        <div className="cart-item">
            <img className="cart-item__img" src={imgSrc} alt={title} />
            <div className="cart-item__content">
                <h3 className="cart-item__title">{title}</h3>
                <div className="cart-item__bottom">
                    <div className="cart-item__quanity">
                        <button className="cart-item__btn" onClick={() => onClickMinus(id)} >-</button>
                        <h4 className="cart-item__amount">{counter}</h4>
                        <button className="cart-item__btn" onClick={() => onClickPlus(id)} >+</button>
                    </div>
                    <span className="cart-item__price">{price * counter} грн</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem;
import './CartItem.scss';
import { useContext } from 'react';
import { AnywherePizzaContext} from '../../context';

function CartItem({ id, imgSrc, title, price, counter }) {
    const { onClickMinus, onClickPlus } = useContext(AnywherePizzaContext);

    return (
        <div className="cart-item">
            <div className='cart-item__info'>
                <img className='cart-item__img' src={imgSrc} alt={title} />
                <h2 className='cart-item__title'>{title}</h2>
            </div>
            <div className='cart-item__summary'>
                <div className='cart-item__counter'>
                    <button className="cart-item__btn" onClick={() => onClickMinus(id)} >-</button>
                    <h4 className="cart-item__amount">{counter}</h4>
                    <button className="cart-item__btn" onClick={() => onClickPlus(id)} >+</button>
                </div>
                <span className="cart-item__price">{price * counter} грн</span>
            </div>
        </div>
    )
}

export default CartItem;
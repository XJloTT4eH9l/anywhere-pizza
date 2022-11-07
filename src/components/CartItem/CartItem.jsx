import './CartItem.scss';
import { useContext } from 'react';
import { AnywherePizzaContext} from '../../context';

function CartItem({ id, imgSrc, title, price, counter, activeSize, type }) {
    const { onClickMinus, onClickPlus } = useContext(AnywherePizzaContext);

    return (
        <div className="cart-item">
            <div className='cart-item__info'>
                <img className='cart-item__img' src={imgSrc} alt={title} />
                <div className='cart-item__description'>
                    <h2 className='cart-item__title'>{title}</h2>
                    {activeSize && <p className='cart-item__size'>{activeSize} см</p>}
                    {type && <p className='cart-item__size'>{type}</p>}
                </div>
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
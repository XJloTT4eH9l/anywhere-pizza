import './SideCartItem.scss';
import { useContext } from 'react';
import { AnywherePizzaContext} from '../../context';

function SideCartItem({ id, imgSrc, title, price, counter, activeSize, type }) {
    const { onClickMinus, onClickPlus } = useContext(AnywherePizzaContext);
    return (
        <div className="side-cart-item">
            <img className="side-cart-item__img" src={imgSrc} alt={title} />
            <div className="side-cart-item__content">
                <h3 className="side-cart-item__title">{title}</h3>
                {activeSize && <p className='side-cart-item__info'>{activeSize} см</p>}
                {type && <p className='side-cart-item__info'>{type}</p>}
                <div className="side-cart-item__bottom">
                    <div className="side-cart-item__quanity">
                        <button className="side-cart-item__btn" onClick={() => onClickMinus(id)} >-</button>
                        <h4 className="side-cart-item__amount">{counter}</h4>
                        <button className="side-cart-item__btn" onClick={() => onClickPlus(id)} >+</button>
                    </div>
                    <span className="side-cart-item__price">{price * counter} грн</span>
                </div>
            </div>
        </div>
    )
}

export default SideCartItem;
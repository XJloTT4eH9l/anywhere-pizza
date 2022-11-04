import './CartAdded.scss';
import { useContext } from 'react';
import { AnywherePizzaContext } from '../../context';

function CartAdded() {
    const { addedToCart } = useContext(AnywherePizzaContext)
    return <div className={addedToCart ? 'cart-added cart-added--active' : 'cart-added'}>Товар додано в корзину</div>
}

export default CartAdded;
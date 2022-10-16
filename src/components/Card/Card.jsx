import './Card.scss';
import { useContext } from 'react';
import {AnywherePizzaContext} from '../../context';

function Card({id, imgUrl, title, compound, price}) {
    const { onCartAdded } = useContext(AnywherePizzaContext);

    function onCart() {
        onCartAdded({id, title, imgUrl, compound, price, counter: 1});
    }
    
    return (
        <div className="card">
            <div className='card__content'>
                <img src={imgUrl} alt={title} />
                <h3 className="card__title">{title}</h3>
                <p className="card__setup">{compound}</p>
            </div>
            <div className='card__pick'>
                <button className="btn" onClick={onCart}>Додати</button>
                <span className="card__price">від {price} грн</span>
            </div>
        </div>
    )
}

export default Card;
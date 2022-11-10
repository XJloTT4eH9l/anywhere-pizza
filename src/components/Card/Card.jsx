import './Card.scss';
import { useState, useContext } from 'react';
import {AnywherePizzaContext} from '../../context';

function Card({id, imgUrl, title, compound, price}) {
    const { onCartAdded, cartItems } = useContext(AnywherePizzaContext);
    
    function onCart() {
        onCartAdded({id, title, imgUrl, compound, price, counter: 1});
    }

    function getProductCounter() {
        const product = cartItems.find(cartObj => cartObj.id === id);
        if(product) {
            return product.counter;
        }
    }
    
    return (
        <div className="card">
            <div className='card__content'>
                <img src={imgUrl} alt={title} />
                <h3 className="card__title">{title}</h3>
                <p className="card__setup">{compound}</p>
            </div>
            <div className='card__pick'>
                <button className={getProductCounter() ? 'btn btn--active' : 'btn'} onClick={onCart}>
                    {
                        getProductCounter() ? (
                            <div>Додано - <span className='card__counter'>{getProductCounter()}</span></div>
                        ) : 'Додати'
                    }
                </button>
                <span className="card__price">{price} грн</span>
            </div>
        </div>
    )
}

function PizzaCard({id, imgUrl, title, compound, prices, sizes}) {
    const { onCartAddedPizza, cartItems } = useContext(AnywherePizzaContext);
    const doughtypes = ['Традиційне', 'Тонке'];
    const [type, setType] = useState(doughtypes[0]);
    const [activeSize, setActiveSize] = useState(sizes[0]);
    const [price, setPrice] = useState(prices[0]);

    function onCart() {
        onCartAddedPizza({id, title, imgUrl, compound, price, counter: 1, activeSize, type});
    }

    function getProductCounter() {
        const initialValue = 0;
        const productsInCart = cartItems
            .filter(product => product.id === id)
            .reduce((summ, nextProduct) => summ + nextProduct.counter, initialValue);
            
        if(productsInCart) {
            return productsInCart;
        }
    }

    function sizeHandler(size) {
        setActiveSize(size);

        switch(size) {
            case 20:
                setPrice(prices[0])
                break
            case 30: 
                setPrice(prices[1])   
                break
            case 40: 
                setPrice(prices[2])   
                break
            default:
                console.log('hello')
                break      
        }
    }

    return (
        <div className="card">
            <div className='card__content'>
                <img src={imgUrl} alt={title} />
                <h3 className="card__title">{title}</h3>
                <p className="card__setup">{compound}</p>
                {sizes &&
                    <>
                        <div className='card__types'>
                            {doughtypes.map(doughtype => {
                                const isActive = doughtype === type;
                                return (
                                    <button 
                                        key={doughtype} 
                                        className={isActive ? 'card__btn card__btn--active card__btn--type' : 'card__btn card__btn--type'} 
                                        onClick={() => setType(doughtype)}>
                                            {doughtype}
                                    </button>
                                )
                            })}
                        </div>
                        <div className='card__sizes'>
                            {sizes.map(size => {
                                const isActive = size === activeSize;
                                return (
                                    <button 
                                        key={size} 
                                        className={isActive ? 'card__btn card__btn--active' : 'card__btn'}
                                        onClick={() => sizeHandler(size)}>
                                            {size} см
                                    </button>
                                )
                            })}
                        </div>
                    </> 
                }
            </div>
            <div className='card__pick'>
                <button className={getProductCounter() ? 'btn btn--active' : 'btn'} onClick={onCart}>
                    {
                        getProductCounter() ? (
                            <div>Додано - <span className='card__counter'>{getProductCounter()}</span></div>
                        ) : 'Додати'
                    }
                </button>
                <span className="card__price">{price} грн</span>
            </div>
        </div>
    )
}

export {Card, PizzaCard};
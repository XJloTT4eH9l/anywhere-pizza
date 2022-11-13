import './CardPlaceholder.scss';

function PizzaPlaceholder() {
    return (
        <div className="pizzaPlaceholder">
            <div className='pizzaPlaceholder__round'></div>
            <div className='pizzaPlaceholder__title'></div>
            <div className='pizzaPlaceholder__compound'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='pizzaPlaceholder__types'>
                <span></span>
                <span></span>
            </div>
            <div className='pizzaPlaceholder__sizes'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='pizzaPlaceholder__bottom'>
                <div className='pizzaPlaceholder__btn'></div>
                <span></span>
            </div>
        </div>
    )
}

function CardPlaceholder() {
    return (
        <div className="cardPlaceholder">
            <div className="cardPlaceholder__img"></div>
            <div className='pizzaPlaceholder__title'></div>
            <div className='cardPlaceholder__compound'></div>
            <div className='pizzaPlaceholder__bottom'>
                <div className='pizzaPlaceholder__btn'></div>
                <span></span>
            </div>
        </div>
    )
}

export { PizzaPlaceholder, CardPlaceholder}
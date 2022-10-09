import './Card.scss';

function Card({imgUrl, title, compound, price}) {
    return (
        <div className="card">
            <div className='card__content'>
                <img src={imgUrl} alt={title} />
                <h3 className="card__title">{title}</h3>
                <p className="card__setup">{compound}</p>
            </div>
            <div className='card__pick'>
                <button className="btn">Обрати</button>
                <span className="card__price">від {price} грн</span>
            </div>
        </div>
    )
}

export default Card;
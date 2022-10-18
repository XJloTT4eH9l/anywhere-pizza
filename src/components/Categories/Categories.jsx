import './Categories.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AnywherePizzaContext} from '../../context.js';

function Categories() {
    return (
        <div className="categories">
            <CategoriesItem imgSrc='img/pizza-icon.png' title='Піца' link='/pizza' />
            <CategoriesItem imgSrc='img/sushi-icon.png' title='Суші' link='/sushi' />
            <CategoriesItem imgSrc='img/drinks-icon.png' title='Напої' link='/drinks' />
            <CategoriesItem imgSrc='img/snacks-icon.png' title='Закуски' link='/snacks' />
            <CategoriesItem imgSrc='img/combo-icon.png' title='Комбо' link='/combo' />
            <CategoriesItem imgSrc='img/desserts-icon.png' title='Десерти' link='/desserts' />
            <CategoriesItem imgSrc='img/sauces-icon.png' title='Соуси' link='/sauces' />
        </div>
    )
}

function CategoriesItem({imgSrc, title, link}) {
    const { setDisplayNav } = useContext(AnywherePizzaContext);
    return (
            <Link className='categories__item' to={link} onClick={() => setDisplayNav(true)}>
                <img src={imgSrc} alt={title} />
                <h2 className="categories__title">{title}</h2>
            </Link>
    )
}

export default Categories;
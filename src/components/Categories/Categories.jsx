import './Categories.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AnywherePizzaContext} from '../../context.js';

function Categories() {
    const { navLinks, setDisplayNav, setNavLinkActive } = useContext(AnywherePizzaContext);
    return (
        <div className="categories">
            {navLinks.map(category => {
                return (
                    <Link
                        key={category.title}
                        className='categories__item'
                        to={category.href}
                        onClick={() => {
                            setDisplayNav(true)
                            setNavLinkActive(category.title)
                    }}>
                        <img src={category.imgSrc} alt={category.title}/>
                        <h2 className='categories__title'>{category.name}</h2>
                    </Link>
                )
            })}
        </div>
    )
}

export default Categories;
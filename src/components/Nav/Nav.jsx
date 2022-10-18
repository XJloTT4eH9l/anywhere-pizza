import './Nav.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AnywherePizzaContext} from '../../context.js';


function Nav() {
    const { setDisplayNav } = useContext(AnywherePizzaContext);
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><Link className='nav__link' onClick={() => setDisplayNav(true)} to='/pizza' >Піца</Link></li>
                <li className="nav__item"><Link className='nav__link' onClick={() => setDisplayNav(true)} to='/sushi'>Суші</Link></li>
                <li className="nav__item"><Link className='nav__link' onClick={() => setDisplayNav(true)} to='/drinks'>Напої</Link></li>
                <li className="nav__item"><Link className='nav__link' onClick={() => setDisplayNav(true)} to='/snacks'>Закуски</Link></li>
                <li className="nav__item"><Link className='nav__link' onClick={() => setDisplayNav(true)} to='/kombo'>Комбо</Link></li>
                <li className="nav__item"><Link className='nav__link' onClick={() => setDisplayNav(true)} to='/desserts'>Десерти</Link></li>
                <li className="nav__item"><Link className='nav__link' onClick={() => setDisplayNav(true)} to='/sauces'>Соуси</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
import './Nav.scss';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item"><Link className='nav__link' to='/pizza'>Піца</Link></li>
                <li className="nav__item"><Link className='nav__link' to='/sushi'>Суші</Link></li>
                <li className="nav__item"><Link className='nav__link' to='/drinks'>Напої</Link></li>
                <li className="nav__item"><Link className='nav__link' to='/snacks'>Закуски</Link></li>
                <li className="nav__item"><Link className='nav__link' to='/kombo'>Комбо</Link></li>
                <li className="nav__item"><Link className='nav__link' to='/desserts'>Десерти</Link></li>
                <li className="nav__item"><Link className='nav__link' to='/sauces'>Соуси</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
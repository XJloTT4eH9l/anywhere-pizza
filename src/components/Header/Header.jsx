import './Header.scss';
import { Link } from 'react-router-dom';

import Nav from '../Nav/Nav';

function Header() {
    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to='/' className='header__logo'>
                        <img src='img/logo.png' alt='Лого' />
                        <h1>Куди піца</h1>
                    </Link>
                    <Nav />
                    <button className='header__cart'>
                        <img src='img/cart.svg' alt='Корзина' />
                        <span>0 грн</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
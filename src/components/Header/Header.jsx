import './Header.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnywherePizzaContext } from '../../context';

import Nav from '../Nav/Nav';

function Header() {
    const { getCartSummary, setIsCartOpen, displayNav, setDisplayNav } = useContext(AnywherePizzaContext);

    function openCart() {
        setIsCartOpen(true);
    }

    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <Link to='/' className='header__logo' onClick={() => setDisplayNav(false)}>
                        <img src='img/logo.png' alt='Лого' />
                        <h1>Куди піца</h1>
                    </Link>
                    {displayNav && <Nav />}
                    <button className='header__cart' onClick={openCart}>
                        <img src='img/cart.svg' alt='Корзина' />
                        <span>{getCartSummary()} грн</span>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header;
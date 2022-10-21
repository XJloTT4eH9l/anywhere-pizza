import './Header.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnywherePizzaContext } from '../../context';

import Nav from '../Nav/Nav';
import MobileNav from '../MobileNav/MobileNav';
import BurgerBtn from '../BurgerBtn/BurgerBtn';

function Header() {
    const { getCartSummary, setIsCartOpen, displayNav, setDisplayNav, setNavLinkActive } = useContext(AnywherePizzaContext);

    function openCart() {
        setIsCartOpen(true);
    }

    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <MobileNav />
                    <Link 
                    to='/' 
                    className='header__logo' 
                    onClick={() => {
                    setDisplayNav(false);
                    setNavLinkActive(null);
                    }}>
                        <img src='img/logo.png' alt='Лого' />
                        <h1>Anywhere Піцца</h1>
                    </Link>
                    <BurgerBtn />
                    {displayNav && <Nav navType='nav' flexType='__list' />}
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
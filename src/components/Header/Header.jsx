import './Header.scss';
import { useContext } from 'react';
import { AnywherePizzaContext } from '../../context';

import Nav from '../Nav/Nav';
import Logo from '../Logo/Logo';
import MobileNav from '../MobileNav/MobileNav';
import BurgerBtn from '../BurgerBtn/BurgerBtn';

function Header() {
    const { getCartSummary, setIsCartOpen, displayNav } = useContext(AnywherePizzaContext);

    function openCart() {
        setIsCartOpen(true);
    }

    return(
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <MobileNav />
                    <Logo type='logo'/>
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
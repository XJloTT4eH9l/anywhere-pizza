import './MobileNav.scss';
import Nav from "../Nav/Nav";
import { useContext } from 'react';
import { AnywherePizzaContext } from '../../context';

export default function MobileNav() {
    const { isMobileMenuOpen } = useContext(AnywherePizzaContext);
    return (
        <div className={isMobileMenuOpen ? 'mobile-nav mobile-nav--active' : 'mobile-nav'}>
            <Nav navType='nav-mobile' flexType='__list-column' />
        </div>
    )
}
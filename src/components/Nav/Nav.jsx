import './Nav.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AnywherePizzaContext} from '../../context.js';


function Nav({ navType, flexType }) {
    const { setDisplayNav, navLinkActive, setNavLinkActive, navLinks, setIsMobileMenuOpen } = useContext(AnywherePizzaContext);

    return (
        <nav className={navType}>
            <ul className={navType + flexType}>
                {navLinks.map(link => {
                    const isActive = navLinkActive === link.title;
                    return (
                        <li className={`${navType}__item`} key={link.name}>
                            <Link
                                className={isActive ? `${navType}__link ${navType}__link--active` : `${navType}__link`}
                                onClick={() => {
                                    setDisplayNav(true);
                                    setNavLinkActive(link.title);
                                    setIsMobileMenuOpen(false);
                                }}
                                to={link.href}>
                                {link.name}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;
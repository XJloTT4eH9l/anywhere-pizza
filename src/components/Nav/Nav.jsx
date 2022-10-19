import './Nav.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {AnywherePizzaContext} from '../../context.js';


function Nav() {
    const { setDisplayNav, navLinkActive, setNavLinkActive, navLinks } = useContext(AnywherePizzaContext);

    return (
        <nav className="nav">
            <ul className="nav__list">
                {navLinks.map(link => {
                    const isActive = navLinkActive === link.title;
                    return (
                        <li className="nav__item" key={link.name}>
                            <Link
                                className={isActive ? 'nav__link nav__link--active' : 'nav__link'}
                                onClick={() => {
                                    setDisplayNav(true);
                                    setNavLinkActive(link.title);
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
import './Logo.scss';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AnywherePizzaContext } from '../../context.js';

function Logo({type}) {
    const { setDisplayNav, setNavLinkActive} = useContext(AnywherePizzaContext);

    return (
        <Link 
        to='/anywhere-pizza/' 
        className={type} 
        onClick={() => {
            setDisplayNav(false);
            setNavLinkActive(null);
        }}>
            <img src='img/logo.png' alt='Лого' />
            <h1>Anywhere Піцца</h1>
        </Link>
    )
}

export default Logo;
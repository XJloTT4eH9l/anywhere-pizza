import './BurgerBtn.scss';
import { useContext } from 'react';
import { AnywherePizzaContext } from '../../context';

export default function BurgerBtn() {
    const { isMobileMenuOpen, setIsMobileMenuOpen } = useContext(AnywherePizzaContext);
    return (
        <button 
            className={isMobileMenuOpen ? 'burger-btn burger-btn--active' : 'burger-btn'}
            onClick={() => setIsMobileMenuOpen(prev => !prev)}
            >
            <span className='burger-btn__item'></span>
            <span className='burger-btn__item'></span>
            <span className='burger-btn__item'></span>
        </button>
    )
}
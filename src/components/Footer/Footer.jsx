import './Footer.scss';
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <Logo type='logo--footer'/>
                    <ul className='footer__list'>
                        <h2 className='footer__title'>Інформація</h2>
                        <li className='footer__item'><Link to='/anywhere-pizza/' className='footer__link'>Головна</Link></li>
                        <li className='footer__item'><Link to='/anywhere-pizza/' className='footer__link'>Про нас</Link></li>
                        <li className='footer__item'><Link to='/anywhere-pizza/' className='footer__link'>Контакти</Link></li>
                    </ul>
                    <ul className='footer__list'>
                        <h2 className='footer__title'>Ми приймаємо</h2>
                        <li className='footer__item footer__item--flex'>
                            <img src='img/master-card.svg' alt='mastercard'/>
                            <img src='img/visa.svg' alt='visa' />
                        </li>
                        <h3 className='footer__sub-title'>Або готівкою кур'єру</h3>
                    </ul>
                    <ul className='footer__list'>
                        <h2 className='footer__title'>Контакти</h2>
                        <li className='footer__item'>
                            <a className='footer__link footer__link--flex' href='tel:+380983657689'>
                                <img className='footer__img' src='img/tel.svg' alt='Телефон' />
                                +380 98 3657 689
                            </a>
                        </li>
                        <li className='footer__item'>
                            <a className='footer__link footer__link--flex' href='https://www.google.com.ua/maps/place/ул.+Крещатик,+46А,+Киев,+02000/@50.4436884,30.5170953,17z/data=!3m1!4b1!4m5!3m4!1s0x40d4ce561b389aa7:0x8b2c76f7b3d36bb0!8m2!3d50.443685!4d30.519284?hl=ru' target='blank'>
                                <img className='footer__img' src='img/location.svg' alt='Локація' />
                                Київ, вул.Хрещатик, 46а
                            </a>
                        </li>
                        <li className='footer__item'>
                            <div className='footer__social'>
                                <div className='footer__social-item'>
                                    <a className='footer__link footer__link--flex' href='https://www.facebook.com' target='blank'>
                                        <img className='footer__img' src='img/facebook.svg' alt='Facebook'/>
                                        Facebook
                                    </a>
                                </div>
                                <div className='footer__social-item'>
                                    <a className='footer__link footer__link--flex' href='https://www.instagram.com' target='blank'>
                                        <img className='footer__img' src='img/instagram.svg' alt='Instagram'/>
                                        Instagram
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='footer__copyright'>© Copyright 2021 — Anywher pizza</div>
            </div>
        </footer>
    )
}

export default Footer;
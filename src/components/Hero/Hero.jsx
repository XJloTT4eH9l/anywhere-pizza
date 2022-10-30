import './Hero.scss';

function Hero() {
    return (
        <section 
            className='hero' 
            style={{backgroundImage: 'url("img/hero.png")'}}
        >
            <div className='hero__text-block'>
                <h1 className='hero__title'>Anywhere pizza</h1>
                <p className='hero__about'>Найкраща піца та найшвидша доставка</p>
                <a className='hero__link' href='#menu'>Перейти до меню</a>
            </div>
        </section>
    )
}

export default Hero;
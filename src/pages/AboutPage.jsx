import { useEffect } from 'react';

function AboutPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    return (
        <section className="about" >
            <div className="container-short">
                <h1 className="title">Про нас</h1>
                <div className="about__logo">
                    <img src="img/about.svg" alt="anywhere pizza logo"/>
                    <h2>Anywhere pizza</h2>
                </div>
                <h2 className="about__title">Anywhere pizza</h2>
                <p className="about__text">
                    Ми – нова модна та смачна піцерія, мета якої – спростити доставку класного продукту людям.
                </p>
                <p className="about__text">
                    У нас немає конкурентів, тому що ми унікальні та неповторні - у нас є колеги, яких ми поважаємо і на якість сервісу яких рівняємося.
                </p>
                <p className="about__text">
                    Наша команда – люди, які зібралися разом, щоб сприяти розвитку бренду
                </p>
                <p className="about__text">
                    Наш персонаж - уособлення доброго та чесного, тому в його характері - емпатія та іронія.
                </p>
                <p className="about__text">
                    Наш старший брат - мережа суші-барів "Рис&Риба", тому ми ВЖЕ знаємо, що вам потрібно!
                </p>
                <div className="about__theme">
                    <h3>ШВИДКА ТА БЕЗКОШТОВНА ДОСТАВКА</h3>
                    <p>Дбайливо доставляємо піцу додому або в офіс</p>
                </div>
                <div className="about__theme">
                    <h3>ЯКІСНИЙ СЕРВІС</h3>
                    <p>Відповідаємо стандартам та вимогам якості</p>
                </div>
                <ul className="about__benefits">
                    <h3>Наші переваги</h3>
                    <li className="about__benefit">
                        Ми любимо наших клієнтів, тому ретельно відбираємо найкращі продукти для виготовлення піци.
                    </li>
                    <li className="about__benefit">
                        Гарантуємо феєрію смакових вражень.
                    </li>
                    <li className="about__benefit">
                        Персональний менеджер, який завжди допоможе підібрати піцу на ваш смак.
                    </li>
                    <li className="about__benefit">
                        Наші "КРОЛИКИ" швидко доставлять піцу до дверей.
                    </li>
                    <li className="about__benefit">
                        Вибирайте зручний для вас спосіб оплати.
                    </li>
                    <li className="about__benefit">
                        Оперативно працюємо з непорозуміннями, телефонуйте нам або пишіть в директ Instagram.
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default AboutPage;
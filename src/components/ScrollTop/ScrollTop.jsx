import './ScrollTop.scss';
import SvgSpryte from '../SvgSpryte';
import { useState, useEffect } from 'react';

function ScrollTop() {
    const [scroll, setScroll] = useState(0);

    function handleScroll()  {
        setScroll(window.scrollY);
    }

    function onClickTop() {
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])

    return (
        <>
            <SvgSpryte />
            <button className={scroll > 500 ? 'scroll-top scroll-top--active' : 'scroll-top'} onClick={onClickTop}>
                <svg className='scroll-top__arrow-top'>
                    <use href='#arrow-top'></use>
                </svg>
            </button>
        </>
    )
}

export default ScrollTop;
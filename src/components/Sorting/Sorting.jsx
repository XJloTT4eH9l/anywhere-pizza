import './Sorting.scss';
import SvgSpryte from '../SvgSpryte';
import { useState, useContext } from 'react';
import { AnywherePizzaContext } from '../../context';

function Sorting() {
    const { sortTitle, setSortTitle, isCartOpen } = useContext(AnywherePizzaContext);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const sortings = [
        {name: 'price-low', label: 'По ціні(від меншої до більшої)'},
        {name: 'price-top', label: 'По ціні(від більшої до меншої)'},
        {name: 'title', label: 'По назві'}
    ];

    return (
        <div className={isCartOpen ? "filter--active" : "filter"}>
            <SvgSpryte />
            <button className={isSortOpen ? "filter__button filter__button--active" : "filter__button"} onClick={() => setIsSortOpen(prev => !prev)}>
                <svg className={isSortOpen ? "filter__img filter__img--active" : "filter__img"}><use href='#filter'></use></svg>
                Сортування
            </button>
            <ul className={isSortOpen ? 'filter__list filter__list--active' : 'filter__list'}>
                {sortings.map(sorting => {
                    const isActive = sortTitle === sorting.name;
                    return (
                        <li className={isActive ? 'filter__item filter__item--active' : 'filter__item'}
                            key={sorting.name}
                            onClick={() => {
                            setSortTitle(sorting.name);
                            setIsSortOpen(false);
                            }}
                        >
                            {sorting.label}
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default Sorting;
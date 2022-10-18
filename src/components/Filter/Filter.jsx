import './Filter.scss';
import SvgSpryte from '../SvgSpryte';
import { useState, useContext } from 'react';
import { AnywherePizzaContext } from '../../context';

function Filter() {
    const { setSortTitle, isCartOpen } = useContext(AnywherePizzaContext);
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    const filters = [
        {name: 'price-low', label: 'По ціні(від меншої до більшої)'},
        {name: 'price-top', label: 'По ціні(від більшої до меншої)'},
        {name: 'title', label: 'По назві'}
    ];

    return (
        <div className={isCartOpen ? "filter--active" : "filter"}>
            <SvgSpryte />
            <button className={isFilterOpen ? "filter__button filter__button--active" : "filter__button"} onClick={() => setIsFilterOpen(prev => !prev)}>
                <svg className={isFilterOpen ? "filter__img filter__img--active" : "filter__img"}><use href='#filter'></use></svg>
                Фільтри
            </button>
            <ul className={isFilterOpen ? 'filter__list filter__list--active' : 'filter__list'}>
                {filters.map(filter => {
                    return (
                        <li className="filter__item"
                            key={filter.name}
                            onClick={() => {
                            setSortTitle(filter.name);
                            setIsFilterOpen(false);
                            }}
                        >
                            {filter.label}
                        </li>
                    ) 
                })}
            </ul>
        </div>
    )
}

export default Filter;
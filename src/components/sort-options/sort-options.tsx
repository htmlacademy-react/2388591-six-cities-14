import { useState } from 'react';

import { TSorting } from '../../types/sorting';

import { SortingMap } from '../../const/const';

type SortingProps = {
  activeOption: TSorting;
  onSelectSortOption: (selectedOption: TSorting) => void;
};

function SortingOptions({ activeOption, onSelectSortOption }: SortingProps) {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);

  const toggleOptions = () => {
    setIsOptionsOpened((prev) => !prev);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={toggleOptions}
      >
        {activeOption}
        <svg
          className={`places__sorting-arrow ${isOptionsOpened ? 'places__sorting-arrow--up' : ''}`}
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOptionsOpened ? 'places__options--opened' : ''}`}>
        {Object.entries(SortingMap).map(([type, label]) => (
          <li
            key={type}
            className={`places__option ${activeOption === type ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => {
              onSelectSortOption(type as TSorting);
              toggleOptions();
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </form>
  );
}

export { SortingOptions };

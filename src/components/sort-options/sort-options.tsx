import { useState } from 'react';

import { TSorting } from '../../types/sorting';

import { SortingMap } from '../../const/const';

import cn from 'classnames';

type SortingProps = {
  activeOption: TSorting;
  onSelectSortOption: (selectedOption: TSorting) => void;
};

function SortingOptions({ activeOption, onSelectSortOption }: SortingProps) {
  const [isOptionsOpened, setIsOptionsOpened] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState(activeOption);

  const handleToggleClick = () => {
    setIsOptionsOpened((prev) => !prev);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={handleToggleClick}
      >
        {SortingMap[selectedSortOption]}
        <svg
          className={cn ('places__sorting-arrow', {
            'places__sorting-arrow--up' : isOptionsOpened
          })}
          width="7"
          height="4"
        >
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>

      <ul className={cn('places__options', 'places__options--custom',
        {'places__options--opened': isOptionsOpened
        })}
      >
        {Object.entries(SortingMap).map(([type, label]) => (
          <li
            key={type}
            className={cn('places__option',
              {'places__option--active': selectedSortOption === type
              })}
            tabIndex={0}
            onClick={() => {
              onSelectSortOption(type as TSorting);
              setSelectedSortOption(type as TSorting);
              handleToggleClick();
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

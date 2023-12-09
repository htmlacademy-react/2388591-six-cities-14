import { TCity } from '../../types/city';

import { CityMap, CityName } from '../../const/const';
import cn from 'classnames';

type CityListProps = {
  activeCity: CityName;
  onSelectedCity: (city: TCity) => void;
};

function CityList({ activeCity, onSelectedCity }: CityListProps): JSX.Element {

  const handleCityClick = (city: TCity) => {
    onSelectedCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityMap).map((city) => (
        <li key={city.name} className="locations__item">
          <a
            onClick={() => handleCityClick(city)}
            className={cn('locations__item-link', 'tabs__item',
              {'tabs__item--active': city.name === activeCity
              })}

            href="#"
          >
            <span>{city.name}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export { CityList };



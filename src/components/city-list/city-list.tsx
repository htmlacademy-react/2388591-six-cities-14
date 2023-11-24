import { CityName, CityMap } from '../../const';

type CityListProps = {
  activeCity: CityName;
  onSelectCity: (city: CityName) => void;
};

function CityList({ activeCity, onSelectCity }: CityListProps): JSX.Element {
  const handleCityClick = (city: CityName) => {
    onSelectCity(city);
  };

  return (
    <ul className="locations__list tabs__list">
      {Object.values(CityMap).map((city) => (
        <li key={city.name} className="locations__item">
          <a
            onClick={() => handleCityClick(city.name)}
            className={`locations__item-link tabs__item${city.name === activeCity ? ' tabs__item--active' : ''}`}
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



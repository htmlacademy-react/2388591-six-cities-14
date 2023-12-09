import { useState, useMemo } from 'react';

import Card from '../card/card';
import { Map } from '../map/map';
import {SortingOptions} from '../sort-options/sort-options';

import { useAppSelector } from '../../hooks';

import { selectActiveCity } from '../../store/offers-data/selectors';

import { TPreviewOffer } from '../../types/preview-offer';
import { TSorting } from '../../types/sorting';

import { isPlural } from '../../utils/common';
import { sorting } from '../../utils/sorting';

import { SortingMap } from '../../const/const';

type CitiesProps = {
  offers: TPreviewOffer[];
};


function Cities({ offers }: CitiesProps): JSX.Element {
  const selectedCity = useAppSelector(selectActiveCity);

  const [hoveredOffer, setHoveredOffer] = useState<TPreviewOffer['id'] | null>(null);
  const [activeSorting, setActiveSorting] = useState<TSorting>(SortingMap.Popular);

  const filteredOffers = useMemo(
    () => offers.filter((offer) =>
      offer.city.name === selectedCity.name),
    [selectedCity, offers]
  );
  const sortedOffers = useMemo(
    () => sorting[activeSorting](filteredOffers),
    [filteredOffers, activeSorting]
  );

  const placesCount = filteredOffers.length;

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">
            {placesCount} {isPlural(placesCount, 'place')} to stay in {selectedCity.name}
          </b>
          <SortingOptions
            activeOption={activeSorting}
            onSelectSortOption={setActiveSorting}
          />
          <div className="cities__places-list places__list tabs__content">
            {sortedOffers.map((offer) => (
              <Card
                block="cities"
                size='large'
                key={offer.id}
                offer={offer}
                onCardHover={setHoveredOffer}
              />
            ))}
          </div>
        </section>
        {placesCount && (
          <div className="cities__right-section">
            <Map block="cities" offers={sortedOffers} specialOfferId={hoveredOffer} />
          </div>
        )}
      </div>
    </div>
  );
}

export { Cities };

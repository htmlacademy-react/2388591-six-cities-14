import { useState } from 'react';

import Card from '../card/card';
import { Map } from '../map/map';
import {SortingOptions} from '../sort-options/sort-options';

import { TOffer } from '../../types/offer-type';
import { TCity } from '../../types/offer-type';
import { TSorting } from '../../types/sorting';

import { sorting } from '../../utils/utils';
import { SortingMap } from '../../const';

type CitiesProps = {
  offers: TOffer[];
  selectedCity: TCity;
};

export default function Cities({ offers, selectedCity }: CitiesProps): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<TOffer['id'] | null>(null);
  const [activeSorting, setActiveSorting] = useState<TSorting>(SortingMap.Popular);

  const handleSortOptionSelect = (selectedOption: TSorting) => {
    setActiveSorting(selectedOption);
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === selectedCity.name);
  const sortedOffers = sorting[activeSorting](filteredOffers);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{filteredOffers.length} places to stay in {selectedCity.name}</b>
          <SortingOptions activeOption={activeSorting} onSelectSortOption={handleSortOptionSelect} />
          <div className="cities__places-list places__list tabs__content">
            {sortedOffers.map((offer) => (
              <Card
                block="cities"
                key={offer.id}
                offer={offer}
                onCardHover={setHoveredOffer}

              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map block="cities" offers={sortedOffers} specialOfferId={hoveredOffer} selectedCity={selectedCity}/>
        </div>
      </div>
    </div>
  );
}



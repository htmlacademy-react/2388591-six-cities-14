import { useState } from 'react';

import {Card} from '../card/card';
import { Map } from '../map/map';
import {SortingOptions} from '../sort-options/sort-options';

import { TPreviewOffer } from '../../types/preview-offer';
import { TCity } from '../../types/city';
import { TSorting } from '../../types/sorting';

import { sorting } from '../../utils/utils';
import { SortingMap } from '../../const';

type CitiesProps = {
  offers: TPreviewOffer[];
  activeCity: TCity;
};

export default function Cities({ offers, activeCity }: CitiesProps): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<TPreviewOffer['id'] | null>(null);
  const [activeSorting, setActiveSorting] = useState<TSorting>(SortingMap.Popular);

  const handleSortOptionSelect = (selectedOption: TSorting) => {
    setActiveSorting(selectedOption);
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === activeCity.name);
  const sortedOffers = sorting[activeSorting](filteredOffers);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{filteredOffers.length} places to stay in {activeCity.name}</b>
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
          <Map block="cities" offers={sortedOffers} specialOfferId={hoveredOffer} />
        </div>
      </div>
    </div>
  );
}

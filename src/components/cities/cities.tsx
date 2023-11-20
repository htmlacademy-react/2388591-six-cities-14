import { useState } from 'react';

import Card from '../card/card';
import { Map } from '../map/map';

import { TOffer } from '../../types/offer-type';
import { TCity } from '../../types/offer-type';

type CitiesProps = {
  offers: TOffer[];
  selectedCity: TCity;
};

export default function Cities({ offers, selectedCity }: CitiesProps): JSX.Element {
  const [activeOffer, setActiveOffer] = useState<TOffer['id'] | null>(null);

  const handleCardHover = (offerId: TOffer['id']) => {
    setActiveOffer(offerId);
  };

  const filteredOffers = offers.filter((offer) => offer.city.name === selectedCity.name);

  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{filteredOffers.length} places to stay in {selectedCity.name}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
                  Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {filteredOffers.map((offer) => (
              <Card
                block="cities"
                key={offer.id}
                offer={offer}
                onCardHover={() => handleCardHover(offer.id)}
              />
            ))}
          </div>
        </section>
        <div className="cities__right-section">
          <Map block="cities" offers={filteredOffers} specialOfferId={activeOffer} />
        </div>
      </div>
    </div>
  );
}

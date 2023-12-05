import React from 'react';

import Card from '../card/card';

import { useAppSelector } from '../../hooks';

import { selectFavorites } from '../../store/favorites-data/selectors';

import { TPreviewOffer } from '../../types/preview-offer';


function getFavoritesByCity(favoriteOffers: TPreviewOffer[]) {
  return favoriteOffers.reduce<{ [key: string]: TPreviewOffer[] }>(
    (groupedFavorites, offer) => {
      const city = offer.city.name;

      if (!groupedFavorites[city]) {
        groupedFavorites[city] = [];
      }

      groupedFavorites[city].push(offer);

      return groupedFavorites;
    },
    {}
  );
}
export function FavoritesList() {
  const favorites = useAppSelector(selectFavorites);
  const favoritesByCity = getFavoritesByCity(favorites);

  return (
    <ul className="favorites__list">
      {Object.keys(favoritesByCity).map((city) => (
        <React.Fragment key={city}>
          <li className="favorites__locations-items">
            <div className="favorites__locations locations locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>{city}</span>
                </a>
              </div>
            </div>
            <div className="favorites__places">
              {favoritesByCity[city].map((offer) => (
                <Card
                  key={offer.id}
                  offer={offer}
                  block="favorites"
                  size="small"
                />
              ))}
            </div>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
}

import React from 'react';
import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';

import { selectFavorites } from '../../store/favorites-data/selectors';

import Card from '../../components/card/card';
import {Footer} from '../../components/footer/footer';
import {Header} from '../../components/header/header';

import { TPreviewOffer } from '../../types/preview-offer';

function getFavoritesByCity(favoriteOffers: TPreviewOffer[]) {
  return favoriteOffers.reduce<{ [key: string]: TPreviewOffer[] }>((groupedFavorites, offer) => {
    const city = offer.city.name;

    if (!groupedFavorites[city]) {
      groupedFavorites[city] = [];
    }

    groupedFavorites[city].push(offer);

    return groupedFavorites;
  }, {});
}

function Favorites() {
  const favorites = useAppSelector(selectFavorites);
  const favoritesByCity = getFavoritesByCity(favorites);

  return (
    <div className="page">
      <Helmet>
        <title>6 cities | Favorites</title>
      </Helmet>
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favoritesByCity).map((city) => (
                <React.Fragment key={city}>
                  <li className="favorites__locations-items">
                    <div className="favorites__locations locations locations--current">
                      <div className="locations__item">
                        <div className="locations__item-link">
                          <span>{city}</span>
                        </div>
                      </div>
                    </div>
                    <div className="favorites__places">
                      {favoritesByCity[city].map((offer) => (
                        <Card key={offer.id} offer={offer} block="favorites" />
                      ))}
                    </div>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { Favorites };



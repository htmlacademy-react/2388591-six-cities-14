import React from 'react';
import { Offer } from '../../types/offer-type';
import { Helmet } from 'react-helmet-async';
import Card from '../../components/card/card';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

type FavoritesProps = {
  favoriteOffers: Offer[];
};

const getFavoritesByCity = (favoriteOffers: Offer[]) => {
  const groupedFavorites: { [key: string]: Offer[] } = {};
  favoriteOffers.forEach((offer) => {
    const city = offer.city.name;

    if (!groupedFavorites[city]) {
      groupedFavorites[city] = [];
    }

    groupedFavorites[city].push(offer);
  });

  return groupedFavorites;
};

export default function Favorites({ favoriteOffers }: FavoritesProps): JSX.Element {
  const favoriteOffersList = favoriteOffers.filter((offer) => offer.isFavorite);
  const groupedFavorites = getFavoritesByCity(favoriteOffersList);

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
              {Object.keys(groupedFavorites).map((city) => (
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
                      {groupedFavorites[city].map((offer) => (
                        <Card key={offer.id} offer={offer} />
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


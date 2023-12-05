import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';

import { selectFavorites, selectFetchingStatus } from '../../store/favorites-data/selectors';

import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { Footer } from '../../components/footer/footer';
import { Header } from '../../components/header/header';

import { FavoritesEmptyPage } from '../favorites-empty/favorites-empty';
import { RequestStatus } from '../../const/const';


function FavoritesPage() {
  const favorites = useAppSelector(selectFavorites);
  const fetchingStatus = useAppSelector(selectFetchingStatus);
  const hasFavorites = Boolean(favorites?.length);

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
            {hasFavorites && fetchingStatus === RequestStatus.Success && (
              <FavoritesList />
            )}

            {!hasFavorites && fetchingStatus === RequestStatus.Success && (
              <FavoritesEmptyPage />
            )}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { FavoritesPage };

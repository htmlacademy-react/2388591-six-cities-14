import { Helmet } from 'react-helmet-async';

import { useAppSelector } from '../../hooks';

import { selectFavorites, selectFetchingStatus } from '../../store/favorites-data/selectors';

import {Footer} from '../../components/footer/footer';
import {Header} from '../../components/header/header';

import { FavoritesList } from '../../components/favorites-list/favorites-list';
import { RequestStatus } from '../../const';
import { FavoritesEmpty } from '../favorites-empty/favorites-empty';


function Favorites() {
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
          {fetchingStatus === RequestStatus.Success && (
            hasFavorites ? <FavoritesList /> : null
          )}
          {!hasFavorites && fetchingStatus === RequestStatus.Success && <FavoritesEmpty />}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export { Favorites };



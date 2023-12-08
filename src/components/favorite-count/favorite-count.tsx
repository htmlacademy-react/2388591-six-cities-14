import { useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/favorites-data/selectors';

function FavoriteCount() {
  const favorites = useAppSelector(selectFavorites);
  return (
    <span className="header__favorite-count">{favorites.length}</span>

  );
}

export { FavoriteCount };


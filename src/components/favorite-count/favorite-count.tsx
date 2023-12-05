import { useFavoriteCount } from './hook';

function FavoriteCount() {
  const favoriteCount = useFavoriteCount();
  return (
    <span className="header__favorite-count">{favoriteCount}</span>

  );
}

export { FavoriteCount };


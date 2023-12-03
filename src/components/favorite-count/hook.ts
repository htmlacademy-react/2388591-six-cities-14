import { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks';
import { selectFavorites } from '../../store/favorites-data/selectors';

const useFavoriteCount = () => {
  const favorites = useAppSelector(selectFavorites);
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    setFavoriteCount(favorites.length);
  }, [favorites]);

  return favoriteCount;
};

export { useFavoriteCount };


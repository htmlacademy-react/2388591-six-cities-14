import { Link } from 'react-router-dom';
import { memo } from 'react';

import { useAppSelector } from '../../hooks';

import { BookMark } from '../bookmark/bookmark';

import { selectFavorites } from '../../store/favorites-data/selectors';

import { TSizeMap } from '../../types/size';
import { TPreviewOffer } from '../../types/preview-offer';

import { getRating, capitalizeFirstLetter } from '../../utils/common';

import { AppRoute } from '../../const/const';

type CardProps = {
  offer: TPreviewOffer;
  block: string;
  size: keyof TSizeMap;
  onCardHover?: (offerId: TPreviewOffer['id'] | null) => void;
};

const sizeMap: TSizeMap = {
  small: { width: '150', height: '110'},
  large: { width: '260', height: '200'},
};

function Card({ offer, block, onCardHover, size = 'large' }: CardProps): JSX.Element {
  const { isPremium, previewImage, id, price, title, type, rating, isFavorite } = offer;

  const favorites = useAppSelector(selectFavorites);

  const handleMouseEnter = () => {
    onCardHover?.(id);
  };

  const handleMouseLeave = () => {
    onCardHover?.(null);
  };

  const isOfferInFavorites = favorites.some((favoriteOffer) => favoriteOffer.id === id);

  const shouldDisplayFavoriteMarker = isFavorite && isOfferInFavorites;

  return (
    <article
      className={`${block}__card place-card`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${block}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} alt={title} {...sizeMap[size]} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookMark id={id} block="place-card" isActive={shouldDisplayFavoriteMarker} size={'small'} />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getRating(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

const MemoizedCard = memo(Card);
export default MemoizedCard;

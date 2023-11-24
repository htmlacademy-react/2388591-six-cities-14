import { Link } from 'react-router-dom';

import { TPreviewOffer } from '../../types/preview-offer';

import { useAppSelector } from '../../hooks';

import { AppRoute } from '../../const';

type CardProps = {
  offer: TPreviewOffer;
  block: string;
  onCardHover?: (offerId: TPreviewOffer['id'] | null) => void;
};

function Card({ offer, block, onCardHover }: CardProps): JSX.Element {
  const { isPremium, previewImage, id, price, title, type } = offer;
  const favorities = useAppSelector((state) => state.favorites);
  const isFavorite = favorities.some((favorite) => favorite.id === id);

  const handleMouseEnter = () => {
    onCardHover?.(id);
  };

  const handleMouseLeave = () => {
    onCardHover?.(null);
  };

  return (
    <article
      className="near-places__card place-card"
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
          <img className="place-card__image" src={previewImage} alt={title} />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button button ${
              isFavorite ? 'place-card__bookmark-button--active' : ''
            }`}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">{isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '100%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export {Card};

import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';


import {NearbyOffersList} from '../../components/near-places-list/near-places-list';
import {Header} from '../../components/header/header';
import {ReviewList} from '../../components/reviews-list/reviews-list';
import { Map } from '../../components/map/map';
import { Spinner } from '../../components/spinner/spinner';
import { BookMark } from '../../components/bookmark/bookmark';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { dropOffer } from '../../store/actions/action';
import { fetchOffer, fetchNearPlaces } from '../../store/actions/api-actions';
import { selectFetchingStatus, selectOffer } from '../../store/offer-data/selectors';
import { selectNearPlaces } from '../../store/near-places-data/selectors';

import { AppRoute, MAX_IMAGES_TO_DISPLAY, MAX_NEAR_PLACES_COUNT, RequestStatus } from '../../const/const';

import { getRating, isPlural, capitalizeFirstLetter } from '../../utils/common';

import cn from 'classnames';

function OfferPage() {
  const {offerId} = useParams();
  const dispatch = useAppDispatch();
  const offer = useAppSelector(selectOffer);
  const fetchingStatus = useAppSelector(selectFetchingStatus);
  const nearPlaces = useAppSelector(selectNearPlaces);
  const nearPlacesToRender = nearPlaces.slice(0, MAX_NEAR_PLACES_COUNT);

  useEffect(() => {
    if (offerId) {
      dispatch(fetchOffer(offerId));
      dispatch(fetchNearPlaces(offerId));
    }

    return () => {
      dispatch(dropOffer());
    };
  }, [offerId, dispatch]);

  if (fetchingStatus === RequestStatus.Loading) {
    return <Spinner />;
  }

  if (fetchingStatus === RequestStatus.Error) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  if(fetchingStatus !== RequestStatus.Success || !offer) {
    return null;
  }


  return(
    <div className="page">
      <Helmet><title>{`6 cities | ${offer.title}`}</title></Helmet>
      <Header />
      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {offer.images.slice(0, MAX_IMAGES_TO_DISPLAY).map((image) => (
                <div key={image} className="offer__image-wrapper">
                  <img
                    className="offer__image"
                    src={image} alt={`Offer Image ${offer.id}`}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {offer?.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {offer?.title}
                </h1>
                <BookMark id={offer.id} block="offer" isActive={offer.isFavorite} size={'large'}/>

              </div>

              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{ width: getRating(offer.rating) }} />
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{offer?.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeFirstLetter(offer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {offer.bedrooms} {isPlural(offer.bedrooms, 'Bedroom')}
                </li>
                <li className="offer__feature offer__feature--adults">
                Max {offer?.maxAdults} {isPlural(offer.maxAdults, 'adult')}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">{`€${offer?.price}`}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What is inside</h2>
                <ul className="offer__inside-list">
                  {offer.goods.map((good) => (
                    <li key={good} className="offer__inside-item">
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={cn('offer__avatar-wrapper', {'offer__avatar-wrapper--pro': offer.host.isPro}, 'user__avatar-wrapper')}>
                    <img
                      className="offer__avatar user__avatar"
                      src={offer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{offer.host.name}</span>
                  {offer.host.isPro && (
                    <span className="offer__user-status">Pro</span>
                  )}
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {offer.description}
                  </p>
                  <p className="offer__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              {offerId && <ReviewList offerId={offerId} />}
            </div>
          </div>
          <section className="offer__map map" >
            <Map
              offers={offer ? [...nearPlacesToRender, offer] : nearPlacesToRender}
              specialOfferId={offerId || null}
              block='offer'
            />
          </section>
        </section>
        <div className="container">
          <NearbyOffersList nearbyOffers={nearPlacesToRender} />
        </div>
      </main>
    </div>
  );
}

export { OfferPage };

import { Helmet } from 'react-helmet-async';
import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  selectActiveCity,
  selectFetchingStatus,
  selectOffers,
} from '../../store/offers-data/selectors';
import { setActiveCity } from '../../store/offers-data/offers-data';
import { fetchOffers } from '../../store/actions/api-actions';

import { Header } from '../../components/header/header';
import { Cities } from '../../components/cities/cities';
import { CityList } from '../../components/city-list/city-list';
import { Spinner } from '../../components/spinner/spinner';

import { MainEmptyPage } from '../main-empty/main-empty';

import { TCity } from '../../types/city';
import { RequestStatus } from '../../const/const';

import cn from 'classnames';

function MainPage() {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(selectFetchingStatus);

  const offers = useAppSelector(selectOffers);

  const selectedCity = useAppSelector(selectActiveCity);

  const hasOffers = Boolean(offers?.length);
  const handleSelectCity = useCallback(
    (city: TCity) => {
      dispatch(setActiveCity(city));
    },
    [dispatch]
  );

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch, selectedCity]);
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities | Main</title>
      </Helmet>
      <Header />
      <main className={cn('page__main page__main--index', !hasOffers && 'page__main--index-empty')}>

        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList
              activeCity={selectedCity.name}
              onSelectCity={handleSelectCity}
            />
          </section>
        </div>
        {fetchingStatus === RequestStatus.Loading && <Spinner />}

        {fetchingStatus === RequestStatus.Success &&
          (hasOffers ? (
            <Cities offers={offers} />


          ) : (
            <MainEmptyPage city={selectedCity.name} />

          ))}
      </main>
    </div>
  );
}

export { MainPage };

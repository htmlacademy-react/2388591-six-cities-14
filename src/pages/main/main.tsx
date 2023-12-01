import { Helmet } from 'react-helmet-async';
import { useCallback, useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { selectActiveCity, selectFetchingStatus, selectOffers } from '../../store/offers-data/selectors';
import { setActiveCity } from '../../store/offers-data/offers-data';
import { fetchOffers } from '../../store/api-actions';

import { Header } from '../../components/header/header';
import {Cities} from '../../components/cities/cities';
import { CityList } from '../../components/city-list/city-list';
import { Spinner } from '../../components/spinner/spinner';

import { TCity } from '../../types/city';

import { RequestStatus } from '../../const';

function Main() {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector(selectFetchingStatus);

  const offers = useAppSelector(selectOffers);

  const selectedCity = useAppSelector(selectActiveCity);

  const handleSelectCity = useCallback((city: TCity) => {
    dispatch(setActiveCity(city));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch, selectedCity]);

  return (
    <div className="page page--gray page--main">
      <Helmet><title>6 cities | Main</title></Helmet>
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CityList activeCity={selectedCity.name} onSelectCity={handleSelectCity} />
          </section>
        </div>
        {fetchingStatus === RequestStatus.Loading && <Spinner />}
        {fetchingStatus === RequestStatus.Success && (
          <Cities offers={offers} />

        )}
      </main>
    </div>
  );
}


export { Main };

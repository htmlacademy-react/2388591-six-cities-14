import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';


import { Header } from '../../components/header/header';
import {Cities} from '../../components/cities/cities';
import { CityList } from '../../components/city-list/city-list';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../store/api-actions';

import { Spinner } from '../../components/spinner/spinner';
import { RequestStatus } from '../../const';
import { setActiveCity } from '../../store/action';
import { TCity } from '../../types/city';

function Main() {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector((state) => state.offersFetchingStatus);
  const offers = useAppSelector((state) => state.offers);
  const selectedCity = useAppSelector((state) => state.activeCity);

  const handleSelectCity = (city: TCity) => {
    dispatch(setActiveCity(city));
  };


  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

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


export {Main};

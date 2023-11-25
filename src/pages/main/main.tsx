import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';


import { Header } from '../../components/header/header';
import { useState } from 'react';
import { TCity } from '../../types/offer';
import {Cities} from '../../components/cities/cities';
import { CityList } from '../../components/city-list/city-list';
import { CityName, CityMap } from '../../const';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { fetchOffers } from '../../store/api-actions';

import { Spinner } from '../../components/spinner/spinner';
import { RequestStatus } from '../../const';

function Main() {
  const dispatch = useAppDispatch();
  const fetchingStatus = useAppSelector((state) => state.offersFetchingStatus);
  const offers = useAppSelector((state) => state.offers);

  const [selectedCity, setSelectedCity] = useState<CityName>(CityName.Paris);
  const selectedCityObject: TCity = CityMap[selectedCity];

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
            <CityList activeCity={selectedCity} onSelectCity={setSelectedCity} />
          </section>
        </div>
        {fetchingStatus === RequestStatus.Loading && <Spinner />}
        {fetchingStatus === RequestStatus.Success && (
          <Cities offers={offers} activeCity={selectedCityObject}/>
        )}
      </main>
    </div>
  );
}


export {Main};

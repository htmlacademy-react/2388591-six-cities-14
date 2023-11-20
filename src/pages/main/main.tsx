import { Helmet } from 'react-helmet-async';
import Header from '../../components/header/header';
import { useState } from 'react';
import { TOffer, TCity } from '../../types/offer-type';
import Cities from '../../components/cities/cities';
import { CityList } from '../../components/city-list/city-list';
import { CityName, CityMap } from '../../const';


type MainPageProps = {
  offers: TOffer[];
}

function Main({ offers }: MainPageProps): JSX.Element {
  const [selectedCity, setSelectedCity] = useState<CityName>(CityName.Paris);
  const selectedCityObject: TCity = CityMap[selectedCity];
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
        <Cities offers={offers} selectedCity={selectedCityObject} />
      </main>
    </div>
  );
}


export {Main};

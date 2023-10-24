import {Route, BrowserRouter, Routes} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Favorites from '../../pages/favorites/favorites';
import OfferPage from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';

import { AppRoute, AuthorizationStatus } from '../../const';


import { Offer } from '../../types/offer-type';

type AppProps = {
  offersCount: number;
  offers: Offer[];
}
export default function App({offersCount, offers}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Root} element={<Main rentCount = {offersCount} offers={offers}/>}
          />
          <Route
            path={AppRoute.Login} element={<Login />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                {<Favorites />}

              </PrivateRoute>
            }
          />
          <Route
            path={`${AppRoute.Offer}/:offerId`} element={<OfferPage />}
          />
          <Route
            path='*' element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

import { useEffect } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { checkAuth } from '../../store/actions/api-actions';

import { useAppDispatch } from '../../hooks';

import { MainPage } from '../../pages/main/main';
import { LoginPage } from '../../pages/login/login';
import { FavoritesPage } from '../../pages/favorites/favorites';
import { OfferPage } from '../../pages/offer-page/offer';
import { NotFoundPage } from '../../pages/not-found-page/not-found-page';

import { PrivateRoute } from '../private-route/private-route';

import { AppRoute } from '../../const/const';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);


  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<MainPage />} />
          <Route path={AppRoute.Login} element={<LoginPage />}/>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
          />
          <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage/>} />
          <Route path={AppRoute.NotFound} element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />

        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;


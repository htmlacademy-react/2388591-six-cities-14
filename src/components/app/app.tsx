import {useEffect} from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { checkAuth, fetchFavorites } from '../../store/api-actions';

import { useAppDispatch } from '../../hooks';
import {Main} from '../../pages/main/main';
import {Login} from '../../pages/login/login';
import { Favorites } from '../../pages/favorites/favorites';
import {OfferPage} from '../../pages/offer-page/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { AppRoute } from '../../const';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]
  );

  return (
    <Provider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path={AppRoute.Root} element={<Main />} />
            <Route path={AppRoute.Login} element={<Login />}/>
            <Route path={AppRoute.Favorites} element={
              <PrivateRoute>
                <Favorites />
              </PrivateRoute>
            }
            />
            <Route path={`${AppRoute.Offer}/:offerId`} element={<OfferPage/>} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </Provider>
  );
};

export default App;


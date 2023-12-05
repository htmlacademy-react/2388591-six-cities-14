import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

import { selectAuthorizationStatus } from '../../store/user-data/selectors';

import { Spinner } from '../spinner/spinner';

import { AppRoute, AuthorizationStatus } from '../../const/const';

type PrivateRouteProps = {
  children: JSX.Element;
}

export function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;

  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner/>;
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}


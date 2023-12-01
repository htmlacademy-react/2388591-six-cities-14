import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

import { getAuthorizationStatus } from '../../store/user-data/selectors';

import { Spinner } from '../spinner/spinner';

import { AppRoute, AuthorizationStatus } from '../../const';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner/>;
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}


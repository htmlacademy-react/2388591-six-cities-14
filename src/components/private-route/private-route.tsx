import { Navigate } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppSelector } from '../../hooks';
import { TState } from '../../types/state';
import { Spinner } from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
}

export default function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;

  const authorizationStatus = useAppSelector((state: TState) => state.authorizationStatus);
  if(authorizationStatus === AuthorizationStatus.Unknown) {
    return <Spinner/>;
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}


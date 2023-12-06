import { Link } from 'react-router-dom';

import { useAppSelector } from '../../hooks';

import { selectAuthorizationStatus } from '../../store/user-data/selectors';

import { LoggedNavigation } from '../logged-nav.tsx/logged-nav';

import { AuthorizationStatus, AppRoute } from '../../const/const';


function Navigation() {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  return (
    <nav className="header__nav">
      {authorizationStatus === AuthorizationStatus.Auth && (
        <LoggedNavigation />

      )}
      {authorizationStatus === AuthorizationStatus.Unknown && ('')}
      {authorizationStatus === AuthorizationStatus.NoAuth && (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}


export { Navigation };

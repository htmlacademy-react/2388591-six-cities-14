import { Link } from 'react-router-dom';

import { useAppSelector, useAppDispatch } from '../../hooks';

import { Logo } from '../logo/logo';

import { logout } from '../../store/api-actions';
import { selectAuthorizationStatus, selectUser } from '../../store/user-data/selectors';

import { AppRoute, AuthorizationStatus } from '../../const';
import { selectFavorites } from '../../store/favorites-data/selectors';


function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(selectFavorites);

  const handleLogout = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logout());
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.Auth ? (
                <>
                  <li className="header__nav-item user">
                    <Link
                      to={`${AppRoute.Favorites}`}
                      className="header__nav-link header__nav-link--profile"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                        {user && user.avatarUrl && (
                          <img
                            className="header__avatar user__avatar"
                            src={user.avatarUrl}
                            alt="User avatar"
                            width="40"
                            height="40"
                          />
                        )}

                      </div>
                      {user && (
                        <>
                          <span className="header__user-name user__name">{user.name}</span>
                          <span className="header__favorite-count">{favorites.length}</span>
                        </>
                      )}
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="#" onClick={handleLogout}>
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
              ) : (
                <li className="header__nav-item">
                  <Link
                    to={AppRoute.Login}
                    className="header__nav-link"
                  >
                    <span>Sign in</span>
                  </Link>
                </li>
              )}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export { Header };

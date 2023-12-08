import { Link } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { selectUser } from '../../store/user-data/selectors';
import { logout } from '../../store/actions/api-actions';

import { FavoriteCount } from '../favorite-count/favorite-count';

import { AppRoute } from '../../const/const';

function LoggedNavigation() {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  const handleLogoutAnchorClick = (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    dispatch(logout());
  };

  return (
    <ul className="header__nav-list">

      <li className="header__nav-item user">
        <Link
          className="header__nav-link header__nav-link--profile"
          to={`${AppRoute.Favorites}`}
        >
          <div className="header__avatar-wrapper user__avatar-wrapper" >

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
          <span className="header__user-name user__name">{user?.email}</span>
          <FavoriteCount />
        </Link>
      </li>
      <li className="header__nav-item">
        <a className="header__nav-link" href="#" onClick={handleLogoutAnchorClick}>
          <span className="header__signout">Sign Out</span>
        </a>
      </li>
    </ul>
  );
}

export { LoggedNavigation };

import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks';

import { selectAuthorizationStatus } from '../../store/user-data/selectors';
import { addFavorite, deleteFavorite } from '../../store/actions/api-actions';

import { TOffer } from '../../types/offer';
import { TSizeMap } from '../../types/size';

import { AppRoute, AuthorizationStatus } from '../../const/const';

import cn from 'classnames';


type BookMarkProps = {
  id: TOffer['id'];
  isActive: boolean | undefined;
  block: string;
  size: keyof TSizeMap;
};

const SizeMap: TSizeMap = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'}
} as const;

function BookMark({ id, isActive, block, size = 'small' }: BookMarkProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(selectAuthorizationStatus);
  const isAuthorized = authStatus === AuthorizationStatus.Auth;

  const handleButtonClick = () => {
    if (authStatus === AuthorizationStatus.NoAuth) {
      navigate(AppRoute.Login);
      return;
    }
    dispatch(isActive ? deleteFavorite(id) : addFavorite(id));
  };


  return (
    <button
      className={cn(`${block}__bookmark-button`, 'button', {
        [`${block}__bookmark-button--active`]: isAuthorized && isActive,
      })}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${block}__bookmark-icon`} {...SizeMap[size]}>

        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In bookmarks' : 'To bookmarks'} Bookmarks </span>
    </button>
  );
}

export { BookMark };

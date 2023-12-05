import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/user-data/selectors';
import { AppRoute, AuthorizationStatus } from '../../const/const';
import { addFavorite, deleteFavorite } from '../../store/actions/api-actions';
import { TOffer } from '../../types/offer';
import { TSizeMap } from '../../types/size';

type BookMarkProps = {
  id: TOffer['id'];
  isActive: boolean;
  block: string;
  size: keyof TSizeMap;
};

const sizeMap: TSizeMap = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'}
};

function BookMark({ id, isActive, block, size = 'small' }: BookMarkProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(selectAuthorizationStatus);


  const handleButtonClick = () => {
    if (isAuthorized === AuthorizationStatus.NoAuth) {

      navigate(AppRoute.Login);
      return;

    }
    if(isActive) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id)
      );
    }
  };


  return (
    <button
      className={classNames(`${block}__bookmark-button`, 'button', {
        [`${block}__bookmark-button--active`]: isActive,
      })}
      type="button"
      onClick={handleButtonClick}
    >
      <svg className={`${block}__bookmark-icon`} {...sizeMap[size]}>

        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">{isActive ? 'In bookmarks' : 'To bookmarks'} Bookmarks </span>
    </button>
  );
}

export { BookMark };

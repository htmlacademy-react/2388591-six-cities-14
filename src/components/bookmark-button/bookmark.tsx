import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectAuthorizationStatus } from '../../store/user-data/selectors';
import { AppRoute } from '../../const';
import { addFavorite, deleteFavorite } from '../../store/api-actions';
import { TOffer } from '../../types/offer';

type BookMarkProps = {
  id: TOffer['id'];
  isActive: boolean;
  block: string;
  size: keyof SizeMap;
};
type SizeMap = {
  small: { width: string; height: string };
  large: { width: string; height: string };
};
const sizeMap: SizeMap = {
  small: {width: '18', height: '19'},
  large: {width: '31', height: '33'}
};

function BookMark({ id, isActive, block, size = 'small' }: BookMarkProps): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector(selectAuthorizationStatus);

  const handleButtonClick = () => {
    if (!isAuthorized) {
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
        [`${block}__bookmark-button--active`]: isActive && isAuthorized,
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

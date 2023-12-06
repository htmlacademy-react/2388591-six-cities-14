import { memo, useEffect } from 'react';
import { Logo } from '../logo/logo';

import { Navigation } from '../navigation/navigation';
import { fetchFavorites } from '../../store/actions/api-actions';
import { useAppDispatch } from '../../hooks';

interface HeaderProps {
  hideNavigation?: boolean;
}


function Header_({hideNavigation = false}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]
  );
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          {!hideNavigation && <Navigation />}

        </div>
      </div>
    </header>
  );
}

export const Header = memo(Header_);

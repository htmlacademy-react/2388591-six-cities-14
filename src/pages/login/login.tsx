import React, { useState, FormEvent, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import { useAppDispatch, useAppSelector } from '../../hooks';

import {
  selectAuthorizationStatus,
  selectSendingStatus,
} from '../../store/user-data/selectors';
import { setActiveCity } from '../../store/offers-data/offers-data';
import { dropSendingStatus } from '../../store/user-data/user-data';
import { fetchFavorites, login } from '../../store/actions/api-actions';

import { Logo } from '../../components/logo/logo';

import { TLoginData } from '../../types/login-data';

import { getRandomArrayElement } from '../../utils/common';

import styles from './login.module.css';
import {
  CityMap,
  AuthorizationStatus,
  AppRoute,
  RequestStatus,
} from '../../const/const';

const EMAIL_PATTERN =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.([0-9]{1,3}|[a-zA-Z]{2})\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const EMAIL_ERROR_TEXT = 'Please enter a correct email address.';
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/;
const PASSWORD_ERROR_TEXT =
  'Password must contain at least one letter and one digit. Please enter a correct password!';

function LoginPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(selectAuthorizationStatus);
  const sendingStatus = useAppSelector(selectSendingStatus);

  const [email, setEmail] = useState<string>('');
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [password, setPassword] = useState<string>('');
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  const isEmailValid = EMAIL_PATTERN.test(email);
  const isPasswordValid = PASSWORD_PATTERN.test(password);
  const isValid = isEmailValid && isPasswordValid;

  const randomCity = useMemo(
    () => getRandomArrayElement(Object.values(CityMap)),
    []
  );

  useEffect(
    () => () => {
      setIsEmailFilled(false);
      setIsPasswordFilled(false);
      dispatch(dropSendingStatus());
    },
    [dispatch]
  );

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isValid) {
      return;
    }

    const form = e.currentTarget;

    const formData = new FormData(form);
    const data = Object.fromEntries(formData) as TLoginData;

    dispatch(login(data)).then(() => dispatch(fetchFavorites()));
  };

  useEffect(() => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      navigate(AppRoute.Root);
    }
  }, [authorizationStatus, navigate]);

  function handleAnchorClick(evt: React.MouseEvent<HTMLAnchorElement>) {
    evt.preventDefault();
    dispatch(setActiveCity(randomCity));
    navigate(AppRoute.Root);
  }

  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>6 cities | Login</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            {sendingStatus === RequestStatus.Error && (
              <p className={styles.message}>
                Failed to submit. Please try again!
              </p>
            )}
            <h1 className="login__title">Sign in</h1>

            <form className="login__form form" onSubmit={handleFormSubmit}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setIsEmailFilled(true)}
                />
                {isEmailFilled && !isEmailValid && (
                  <div className={styles.message}>{EMAIL_ERROR_TEXT}</div>
                )}
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => setIsPasswordFilled(true)}
                />
              </div>
              {isPasswordFilled && !isPasswordValid && (
                <div className={styles.message}>{PASSWORD_ERROR_TEXT}</div>
              )}
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!isValid || sendingStatus === RequestStatus.Loading}
              >
                {sendingStatus === RequestStatus.Loading
                  ? 'sending...'
                  : 'Sign in'}
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a
                className="locations__item-link"
                href="#"
                onClick={handleAnchorClick}
              >
                <span>{randomCity.name}</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export { LoginPage };

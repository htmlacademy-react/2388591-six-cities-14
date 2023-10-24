import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/app/app';

import { Setting } from './const';

////////4.1
import { OFFERS } from './mocks/offers';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.offerCount}
      offers = {OFFERS}
    />
  </React.StrictMode>
);

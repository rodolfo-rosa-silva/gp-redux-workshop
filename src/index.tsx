import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from 'src/styles/global';

import App from './pages/App';
import { persistor, store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);

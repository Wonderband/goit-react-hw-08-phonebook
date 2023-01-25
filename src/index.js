import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App';
import './reset.css';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { HelmetProvider } from 'react-helmet-async';
// import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          <BrowserRouter basename="/goit-react-hw-08-phonebook">
            <App />
          </BrowserRouter>
        {/* </PersistGate> */}
      </Provider>
    </HelmetProvider>
  </React.StrictMode>
);

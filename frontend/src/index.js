import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/main.css'

// Redux
import { Provider } from 'react-redux';
import store from './redux/app/store';
// import { configureStore} from '@reduxjs/toolkit';
// import rootReducer from './redux/reducers'

// const store = configureStore({
//   reducer: rootReducer,
//   devTools: true
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

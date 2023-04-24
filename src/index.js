import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App/App';

const defaultstate = {
  title: 'My title',
}

// const action = {
//   type: 'UPDATE_TITLE',
//   payload: 'NEW_TITLE'
// }

const reducer = (state = defaultstate, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      document.title = action.payload
      return {
        ...state,
        title: action.payload
      }
    default: return state;
  }
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode >
);


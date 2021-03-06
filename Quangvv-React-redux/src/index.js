import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers'
import {Provider} from 'react-redux';

//khởi tạo store
const store     =createStore (rootReducer);

ReactDOM.render(
<Provider store={store}>
    <App/>
</Provider>,
 document.getElementById('root')
);
registerServiceWorker();

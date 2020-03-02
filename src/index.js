import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './redux/configureStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContainer } from 'react-hot-loader';


const store = configureStore();

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component store={store} />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(Root);

if (module.hot) {
    module.hot.accept('./Root', () => render(Root));
}

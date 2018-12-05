import React from 'react';
import MainContainer from './pages/main/mainContainer';
import { Provider } from 'mobx-react';
import store from './store';
export default class App extends React.Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(MainContainer, null)));
    }
}
//# sourceMappingURL=App.js.map
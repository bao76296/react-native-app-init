import React from 'react';
import MainContainer from './pages/main/mainContainer';
import { Provider } from 'mobx-react';
import store from './store';
import { createStackNavigator } from 'react-navigation';
import List from './pages/main/List/List';
const AppNavigator = createStackNavigator({
    Home: {
        screen: MainContainer
    },
    List: {
        screen: List
    },
    initialRouteName: 'Home'
});
export default class App extends React.Component {
    render() {
        return (React.createElement(Provider, { store: store },
            React.createElement(AppNavigator, null)));
    }
}
//# sourceMappingURL=App.js.map
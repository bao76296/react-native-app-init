import React from 'react';
import MainContainer from './pages/main/mainContainer';
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            age: '20'
        };
    }
    render() {
        return (React.createElement(MainContainer, null));
    }
}
//# sourceMappingURL=App.js.map
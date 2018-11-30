import React from 'react';
import { StyleSheet, View } from 'react-native';
import Test from './test';
export default class App extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            age: '20'
        };
    }
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(Test, { age: this.state.age })));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
//# sourceMappingURL=App.js.map
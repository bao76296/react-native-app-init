import React, { Component } from 'react';
import { View, TouchableHighlight, Text, StyleSheet } from 'react-native';
class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'tomato'
        };
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(TouchableHighlight, { onPress: () => {
                    this.setState({ color: this.state.color === 'tomato' ? 'skyblue' : 'tomato' });
                    alert(this.props.age);
                } },
                React.createElement(Text, { style: [styles.title, { color: this.state.color }] }, "Hello World"))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30,
        color: 'red'
    }
});
export default Test;
//# sourceMappingURL=test.js.map
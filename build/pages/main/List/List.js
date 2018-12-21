import React, { Component } from 'react';
import { Text, View } from 'react-native';
export default class List extends Component {
    render() {
        return (React.createElement(Text, null, " this is lsit"));
    }
}
List.navigationOptions = (props) => {
    return {
        title: props.navigation.getParam('title'),
        headerTintColor: '#fff',
        headerStyle: {
            backgroundColor: 'tomato',
        },
        headerTitleStyle: {
            flex: 1,
            textAlign: 'center',
        },
        headerRight: React.createElement(View, null, null),
    };
};
//# sourceMappingURL=List.js.map
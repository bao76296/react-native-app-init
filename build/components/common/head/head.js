import React, { Component } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
export default class HeadContainer extends Component {
    render() {
        return (React.createElement(View, { style: styles.wrapper },
            React.createElement(Text, { style: styles.headCenter })));
    }
}
//# sourceMappingURL=head.js.map
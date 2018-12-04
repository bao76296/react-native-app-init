import React, { Component } from 'react';
import styles from './styles';
import { View, Text } from 'react-native';
export default class HeadContainer extends Component {
    render() {
        return (React.createElement(View, { style: styles.wrapper },
            React.createElement(View, { style: styles.headItemWrapper },
                React.createElement(Text, { style: styles.headItemLeft }, this.props.left)),
            React.createElement(Text, { style: styles.headCenter }, this.props.children),
            React.createElement(View, { style: styles.headItemWrapper },
                React.createElement(Text, { style: styles.headItemRight }, this.props.right))));
    }
}
//# sourceMappingURL=head.js.map
import React, { Component } from 'react';
import * as common from '../../../components/common';
import { View, Text } from 'react-native';
export default class CookHotList extends Component {
    render() {
        return (React.createElement(View, null,
            React.createElement(View, { style: {
                    height: 44,
                    justifyContent: 'center',
                    marginLeft: 10,
                } },
                React.createElement(Text, { style: {
                        fontSize: 16
                    } }, "\u770B\u770B\u83DC\u8C31")),
            React.createElement(common.HotList, null)));
    }
}
//# sourceMappingURL=cookHotList.js.map
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import * as common from '../../../components/common';
import CookSwiper from './cookSwiper';
import CookHotClassify from './cookHotClassify';
export default class CookContainer extends Component {
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: { flex: 1, backgroundColor: '#3f3f3f' } },
                React.createElement(CookSwiper, null),
                React.createElement(CookHotClassify, null),
                React.createElement(common.HostList, null))));
    }
}
//# sourceMappingURL=cookContainer.js.map
import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import CookSwiper from './cookSwiper';
import CookHotClassify from './cookHotClassify';
import CookHotList from './cookHotList';
export default class CookContainer extends Component {
    render() {
        return (React.createElement(ScrollView, null,
            React.createElement(View, { style: { flex: 1, backgroundColor: '#f5f5f5' } },
                React.createElement(CookSwiper, null),
                React.createElement(CookHotClassify, null),
                React.createElement(CookHotList, null))));
    }
}
//# sourceMappingURL=cookContainer.js.map
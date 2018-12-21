import React, { Component } from 'react';
import { View, WebView } from 'react-native';
export default class Other extends Component {
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(WebView, { style: { flex: 1 }, source: { uri: "https://www.baidu.com" } })));
    }
}
//# sourceMappingURL=orther.js.map
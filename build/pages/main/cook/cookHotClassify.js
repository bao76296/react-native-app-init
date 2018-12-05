import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Fetch from '../../../util/Fetch';
export default class CookHotClassify extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hotClassifyList: []
        };
    }
    componentDidMount() {
        Fetch('/cookbook-category.json').then(res => {
            var temp = res.data.category["热门"].slice(0, 11);
            temp.push('更多...');
            this.setState({
                hotClassifyList: temp
            });
        });
    }
    renderButton() {
        let listData = this.state.hotClassifyList;
        if (listData.length <= 0) {
            return false;
        }
        return listData.map((item, i) => (React.createElement(TouchableWithoutFeedback, { key: i },
            React.createElement(View, { style: styles.buttonStyle },
                React.createElement(Text, null, item)))));
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, { style: styles.title }, "\u7CBE\u54C1\u597D\u83DC"),
            React.createElement(View, { style: styles.buttonWrapper }, this.renderButton())));
    }
}
const styles = StyleSheet.create({
    title: {
        height: 50,
        justifyContent: 'center',
        fontSize: 18,
        padding: 12,
        color: '#333'
    },
    buttonWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%'
    },
    buttonStyle: {
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: '#ccc',
        marginTop: -1,
        marginLeft: -1,
        backgroundColor: '#fff'
    },
    textWrapper: {
        color: '#333'
    }
});
//# sourceMappingURL=cookHotClassify.js.map
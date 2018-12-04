import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
            this.setState({
                hotClassifyList: res.data.category["热门"].slice(0, 11).push('更多...')
            });
        });
    }
    render() {
        return (React.createElement(View, null,
            React.createElement(Text, { style: styles.title }, "\u7CBE\u54C1\u597D\u83DC")));
    }
}
const styles = StyleSheet.create({
    title: {
        height: 50,
        justifyContent: 'center',
        fontSize: 18,
        padding: 12,
        color: '#333'
    }
});
//# sourceMappingURL=cookHotClassify.js.map
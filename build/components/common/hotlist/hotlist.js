import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Fetch from '../../../util/Fetch';
export default class HotList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: []
        };
    }
    componentDidMount() {
        Fetch('/cookbook-list.json').then(res => {
            console.log(res.data.length);
            this.setState({
                itemList: res.data.slice(0, 20)
            });
        });
    }
    renderItem() {
        let itemList = this.state.itemList;
        if (itemList.length <= 0)
            return false;
        return itemList.map(item => (React.createElement(View, { style: styles.hotListWrapper, key: item.id },
            React.createElement(Image, { style: styles.imageWrapper, source: { uri: item.img } }),
            React.createElement(View, { style: styles.descItem },
                React.createElement(Text, { style: styles.descItle }, item.name),
                React.createElement(Text, { style: styles.desc },
                    item.favorites,
                    "\u6D4F\u89C8\uFF0C",
                    item.all_click,
                    "\u6536\u85CF")))));
    }
    render() {
        return (React.createElement(View, { style: styles.itemWrapper }, this.renderItem()));
    }
}
const styles = StyleSheet.create({
    itemWrapper: {
        padding: 12,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 0
    },
    hotListWrapper: {
        width: '46%'
    },
    imageWrapper: {
        height: 150,
        width: '100%'
    },
    descItem: {
        padding: 10,
        alignItems: 'center'
    },
    descItle: {
        fontSize: 20,
        color: '#333'
    },
    desc: {
        paddingTop: 5,
        fontSize: 12,
        color: '#f3f3f3'
    }
});
//# sourceMappingURL=hotlist.js.map
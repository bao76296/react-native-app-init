var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
const cookbook = require('../../../assets/images/cookbook.png');
const cookbookActive = require('../../../assets/images/cookbook-active.png');
const menu = require('../../../assets/images/menu.png');
const menuActive = require('../../../assets/images/menu-active.png');
const more = require('../../../assets/images/more.png');
const moreActive = require('../../../assets/images/more-active.png');
const map = require("../../../assets/images/location.png");
const mapActive = require("../../../assets/images/location-active.png");
import { inject } from 'mobx-react';
import styles from './style';
import Cook from './cook/cookContainer';
import Menu from './menu/menuContainer';
import More from './more/moreContainer';
import Orther from './orther/orther';
let MainContainer = class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'cook',
            navItem: [
                { id: 1, title: '首页', icon: cookbook, iconActie: cookbookActive, selectedTab: 'cook', component: React.createElement(Cook, null) },
                { id: 2, title: '菜谱', icon: menu, iconActie: menuActive, selectedTab: 'menu', component: React.createElement(Menu, null) },
                { id: 3, title: '更多', icon: more, iconActie: moreActive, selectedTab: 'more', component: React.createElement(More, null) },
                { id: 4, title: '其他', icon: map, iconActie: mapActive, selectedTab: 'map', component: React.createElement(Orther, null) },
            ]
        };
    }
    componentWillMount() {
        this.props.store.navigation.setNavigation(this.props.navigation);
    }
    renderNavItem() {
        return this.state.navItem.map(item => (React.createElement(TabNavigator.Item, { key: item.id, selected: this.state.selectedTab === item.selectedTab, title: item.title, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon }), onPress: () => this.setState({ selectedTab: item.selectedTab }) }, item.component)));
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(TabNavigator, null, this.renderNavItem())));
    }
};
MainContainer.navigationOptions = {
    title: '菜谱大全',
    headerTintColor: '#fff',
    headerStyle: {
        backgroundColor: 'tomato',
        textAlign: 'center'
    },
    headerTitleStyle: {
        flex: 1,
        textAlign: 'center'
    }
};
MainContainer = __decorate([
    inject('store')
], MainContainer);
export default MainContainer;
//# sourceMappingURL=mainContainer.js.map
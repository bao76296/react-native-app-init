import React, { Component } from 'react';
import { View, Image } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
const cookbook = require('../../../assets/images/cookbook.png');
const cookbookActive = require('../../../assets/images/cookbook-active.png');
const menu = require('../../../assets/images/menu.png');
const menuActive = require('../../../assets/images/menu-active.png');
const more = require('../../../assets/images/more.png');
const moreActive = require('../../../assets/images/more-active.png');
import styles from './style';
import Cook from './cook/cookContainer';
import Menu from './menu/menuContainer';
import More from './more/moreContainer';
class MainContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'cook',
            navItem: [
                { id: 1, title: '首页', icon: cookbook, iconActie: cookbookActive, selectedTab: 'cook', component: React.createElement(Cook, null) },
                { id: 2, title: '菜谱', icon: menu, iconActie: menuActive, selectedTab: 'menu', component: React.createElement(Menu, null) },
                { id: 3, title: '更多', icon: more, iconActie: moreActive, selectedTab: 'more', component: React.createElement(More, null) },
            ]
        };
    }
    renderNavItem() {
        return this.state.navItem.map(item => (React.createElement(TabNavigator.Item, { key: item.id, selected: this.state.selectedTab === item.selectedTab, title: item.title, renderIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon }), renderSelectedIcon: () => React.createElement(Image, { style: styles.icon, source: item.icon }), onPress: () => this.setState({ selectedTab: item.selectedTab }) }, item.component)));
    }
    render() {
        return (React.createElement(View, { style: { flex: 1 } },
            React.createElement(TabNavigator, null, this.renderNavItem())));
    }
}
export default MainContainer;
//# sourceMappingURL=mainContainer.js.map
import React , { Component } from 'react';

import { 
    View,Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

const cookbook = require('../../../assets/images/cookbook.png');
const cookbookActive = require('../../../assets/images/cookbook-active.png');
const menu = require('../../../assets/images/menu.png');
const menuActive = require('../../../assets/images/menu-active.png');
const more = require('../../../assets/images/more.png');
const moreActive = require('../../../assets/images/more-active.png');

import styles from './style'
import Cook from './cook/cookContainer';
import Menu from './menu/menuContainer'
import More from './more/moreContainer'

interface State {
    selectedTab : string,
    navItem : Array<any>
}
interface Props {
}


class MainContainer extends Component <Props,State>{
    constructor (props:any) {
        super(props)
        this.state = {
            selectedTab : 'cook',
            navItem : [
                {id : 1, title : '首页', icon : cookbook, iconActie : cookbookActive, selectedTab : 'cook',component : <Cook/>  },
                {id : 2, title : '菜谱', icon : menu, iconActie : menuActive, selectedTab : 'menu',component : <Menu/>  },
                {id : 3, title : '更多', icon : more, iconActie : moreActive, selectedTab : 'more',component : <More/>  },
            ]
        }
    }

    renderNavItem () { 
        return this.state.navItem.map( item => (
            <TabNavigator.Item
                key ={item.id}
                selected={this.state.selectedTab === item.selectedTab}
                title={item.title}
                renderIcon={() => <Image style ={styles.icon} source={item.icon} />}
                renderSelectedIcon={() => <Image style ={styles.icon} source={item.icon} />}
                onPress={() => this.setState({ selectedTab: item.selectedTab })}>
                {item.component}
            </TabNavigator.Item>
        ))
    }
   

   render () {
       return (
        <View style = {{flex : 1}}>
        
            <TabNavigator>
                {this.renderNavItem()}
            </TabNavigator>
        </View>
       )
   }
}

export default MainContainer
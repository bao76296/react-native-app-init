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
const map = require("../../../assets/images/location.png")
const mapActive = require("../../../assets/images/location-active.png")


import { inject } from 'mobx-react'


import styles from './style'
import Cook from './cook/cookContainer';
import Menu from './menu/menuContainer'
import More from './more/moreContainer'
import Orther from './orther/orther'


interface State {
    selectedTab : string,
    navItem : Array<any>
}
interface Props {
    store?:any,
    navigation? :any
}

@inject('store')
class MainContainer extends Component <Props,State>{
    static navigationOptions = {
        title: '菜谱大全',
        headerTintColor : '#fff',
        headerStyle: {
            backgroundColor: 'tomato',
            textAlign : 'center'
        },
        headerTitleStyle :{
            flex : 1,
           textAlign : 'center'
        }
    }; 




    constructor (props:any) {
        super(props)
        this.state = {
            selectedTab : 'cook',
            navItem : [
                {id : 1, title : '首页', icon : cookbook, iconActie : cookbookActive, selectedTab : 'cook',component : <Cook/>  },
                {id : 2, title : '菜谱', icon : menu, iconActie : menuActive, selectedTab : 'menu',component : <Menu/>  },
                {id : 3, title : '更多', icon : more, iconActie : moreActive, selectedTab : 'more',component : <More/>  },
                {id : 4, title : '其他', icon : map, iconActie : mapActive, selectedTab : 'map',component : <Orther/>  },
            ]
        }
    }

    componentWillMount () {
        this.props.store.navigation.setNavigation(this.props.navigation)
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
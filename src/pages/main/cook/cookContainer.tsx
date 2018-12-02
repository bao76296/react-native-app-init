import React , { Component } from 'react';

import {
    Text, View
} from 'react-native';

import * as Common from '../../../components/common'

export default class CookContainer extends Component {
    render () {
        return (
           <View style ={{flex:1,backgroundColor:'blue'}}>
             <Common.Head>菜谱大全</Common.Head>
             <Text>655555</Text>
           </View>
           
           
        )
    }
}
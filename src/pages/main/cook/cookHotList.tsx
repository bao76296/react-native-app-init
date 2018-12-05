import React , { Component } from 'react';
import * as common from '../../../components/common'
import  { View , Text} from 'react-native'

export default class CookHotList extends Component {
    render () {
        return (
            <View>
                <View style= {{
                    height : 44,
                    justifyContent : 'center',
                    marginLeft : 10,
                   
                }}>
                    <Text style={{
                         fontSize : 16
                    }}>看看菜谱</Text>
                </View>
                <common.HotList></common.HotList>
            </View>
        )
    }
}
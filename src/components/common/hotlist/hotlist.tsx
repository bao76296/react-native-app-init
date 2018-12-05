import React , { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import Fetch from '../../../util/Fetch';

interface props {

}
interface state{
    itemList : Array<any>
}

export default class HotList extends Component<props, state> {
    
    constructor (props:any) {
        super (props) 
        this.state = {
            itemList : []
        }
    }

    componentDidMount () {
        Fetch ('/cookbook-list.json').then(res => {
            console.log(res.data.length)
            this.setState({
                itemList : res.data.slice(0,20)
            })
        })
    }

    renderItem () {
        let itemList  = this.state.itemList
        if(itemList.length <= 0) return false
        return itemList.map (item => (
            <View style={styles.hotListWrapper} key ={item.id}>
                <Image style = {styles.imageWrapper} source={{uri : item.img} }></Image>
                <View style= { styles.descItem}>
                    <Text style ={styles.descItle}>{item.name}</Text>
                    <Text style={styles.desc}>{item.favorites}浏览，{item.all_click}收藏</Text>
                </View>
            </View>
        ))
    }

    render () {
        return (
            <View style={styles.itemWrapper}>
                
               {
                   this.renderItem()
               }
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    itemWrapper : {
        padding : 12,
        flexWrap : 'wrap',
        flexDirection : 'row',
        justifyContent : 'space-between',
        paddingTop : 0
    },
    hotListWrapper : {
        width : '46%'
    },
    imageWrapper : {
        height : 150,
       width:'100%'
    },
    descItem : {
        padding : 10,
        alignItems : 'center'
    },
    descItle : {
        fontSize : 20,
        color : '#333'
    },
    desc : {
        paddingTop : 5,
        fontSize : 12,
        color : '#333'
    }
})
import React , { Component } from 'react';
import { View, Text , StyleSheet,TouchableWithoutFeedback } from 'react-native';

interface props{
    store ? :any
}
interface state {
    hotClassifyList : Array<any>
}
import Fetch from '../../../util/Fetch'
import { inject } from 'mobx-react'

@inject('store')
export default class CookHotClassify extends Component <props, state> {


    constructor (props: any) {
        super(props)
        this.state = {
            hotClassifyList : []
        }
    }


    componentDidMount () {
        Fetch('/cookbook-category.json').then( res  => {
            var temp = res.data.category["热门"].slice(0,11)
            temp.push('更多...');
            this.setState ({
                hotClassifyList : temp
            })
        })
    }

    renderButton () {
        let listData = this.state.hotClassifyList
        if(listData.length <= 0){
            return false
        }
        return listData.map( (item, i) =>(
            <TouchableWithoutFeedback key={i} onPress={
                ()=> {
                    this.props.store.navigation.navigator.navigate('List',{
                        title : item
                    })
                }
            }>
                <View  style={styles.buttonStyle}>
                    <Text>
                        {item}
                    </Text>
                </View>
                
            </TouchableWithoutFeedback>
        ))
    }

    render () {
        return (
            <View>
                <Text style = {styles.title}>
                    精品好菜
                </Text>
                <View style = {styles.buttonWrapper}>
                   {this.renderButton()}
                   
                </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
    title : {
        height : 50,
        justifyContent : 'center',
        fontSize : 18,
        padding : 12,
        color : '#333'
    },
    buttonWrapper : {
        flexDirection : 'row',
        flexWrap : 'wrap',
        width : '100%'
    },
    buttonStyle : {
        width : '25%',
        justifyContent : 'center',
        alignItems : 'center',
        padding : 12,
        borderWidth : 1,
        borderColor : '#ccc',
        marginTop: -1,
        marginLeft : -1,
        backgroundColor : '#fff'
    },
    textWrapper : {
        color : '#333'
    }
})
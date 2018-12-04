import React , { Component } from 'react';
import { View, Text , StyleSheet } from 'react-native';

interface props{

}
interface state {
    hotClassifyList : Array<any>
}
import Fetch from '../../../util/Fetch'
export default class CookHotClassify extends Component <props, state> {


    constructor (props: any) {
        super(props)
        this.state = {
            hotClassifyList : []
        }
    }


    componentDidMount () {
        Fetch('/cookbook-category.json').then( res  => {
            this.setState ({
                hotClassifyList : res.data.category["热门"].slice(0,11).push('更多...')
            })
        })
    }

    render () {
        return (
            <View>
                <Text style = {styles.title}>
                    精品好菜
                </Text>
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
    }
})
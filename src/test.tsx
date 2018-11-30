import React , { Component} from 'react';
import {
    View,
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native';

interface  State {
    color : string
}

interface Props {
    age : string
}

class Test extends Component <Props ,State> {
    constructor (props : any){
        super(props)
        this.state = {
            color : 'tomato'
        }
    } 
    render () {
        return (
            <View>
                <TouchableHighlight onPress = {() => { 
                    this.setState({ color: this.state.color === 'tomato' ? 'skyblue' : 'tomato' })
                    alert(this.props.age)
                }}>
                    <Text style = {[styles.title, { color: this.state.color }]}>
                        Hello World
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignItems : 'center',
        justifyContent : 'center'
    },
    title : {
        fontSize : 30,
        color : 'red'
    }
})



export default Test;

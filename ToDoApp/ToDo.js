import React, { Component } from 'react';
import { 
    View,
    Text, 
    TouchableOpacity, 
    StyleSheet,
    Dimensions
 } from 'react-native'
const {width, height} = Dimensions.get("window");

//To do list item
export default class ToDo extends React.Component {
    state = {
        isEditing : false,
        isCompleted : false
    }
    render() {
        const {isCompleted,isEditing} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.column}>
                    <TouchableOpacity onPress={this._toggleComplete}>
                        <View style={[styles.circle, isCompleted ? styles.completefCircle : styles.uncompletedCircle]}/>
                    </TouchableOpacity>
                    <Text style={[styles.text,isCompleted ? styles.completedText : styles.uncompletedText]}>Hello I'm a To Do </Text>
                </View>
                    {isEditing ? (
                        //while editing
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._finishEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>✅</Text>
                                </View>
                            </TouchableOpacity>
                        </View>

                    ) : (
                        <View style={styles.actions}>
                            <TouchableOpacity onPressOut={this._startEditing}>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>🖊</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.actionContainer}>
                                    <Text style={styles.actionText}>❌</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
        );
    }
    _toggleComplete = () => {
        this.setState(prevState => {
            return ({
                isCompleted: !prevState.isCompleted
            })
        })

    }
    _startEditing = () => {
        this.setState({
            isEditing:true
        });
    };
    _finishEditing = () => {
        this.setState({
            isEditing:false
        })
    }
    
}//end of default class

const styles = StyleSheet.create({
    container : {
        marginLeft:10,
        width : width - 50,
        borderBottomColor: "#bbb",
        borderBottomWidth: StyleSheet.hairlineWidth,
        flexDirection : "row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    text:{
        fontWeight:"600",
        fontSize:20,
        marginVertical:20
    },
    completedText:{
        color:"#bbb",
        textDecorationLine: "line-through"
    },
    uncompletedText:{
        color:"#353839"
    },
    circle:{
        width:30,
        height:30,
        borderRadius:15,
        borderWidth:3,
        marginRight:20 
    },
    completefCircle:{
        borderColor:"#bbb"
    },
    uncompletedCircle:{
        borderColor:"#F23657"
    },
    column:{
        flexDirection:"row",
        alignItems:"center",
        width : width/2,
        justifyContent:"space-between"
    },
    actions:{
        flexDirection:"row"
    },
    actionContainer:{
        marginVertical:10,
        marginHorizontal:10
    }
})
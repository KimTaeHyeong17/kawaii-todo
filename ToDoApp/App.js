import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Dimensions,
  Platform,
  ScrollView
} from 'react-native';
import ToDo from "./ToDo";

const { height, width } = Dimensions.get("window")

export default class App extends React.Component {
  //getting text state
  state = {
    newTodo: ""
  }
  render() {
    //get value of state
    const { newTodo } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar varStyle='light-content' />
        <Text style={styles.title}>Kawai To do</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder={"New To Do"}
            value={newTodo}
            onChangeText={this._controlNewTodo}
            placeholderTextColor={"#999"}
            returnKeyType={"done"}
            autoCorrect={false}
          />
          <ScrollView contentContainerStyle={styles.toDos}>
            <ToDo></ToDo>
          </ScrollView>
        </View>
      </View>
    );
  }
  //getting text function
  _controlNewTodo = text => {
    this.setState({
      newTodo: text
    });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f23657',
    alignItems: 'center',
    // justifyContent : 'center'
  },
  title: {
    color: "white",
    fontSize: 30,
    marginTop: 50,
    fontWeight: "200",
    marginBottom: 30
  },
  card: {
    backgroundColor: "white",
    flex: 1,
    width: width - 25,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    /** shadow : specific target code **/
    //ios - shadowColor,offset,etc
    //android - elevation (0~5) more restrictive
    ...Platform.select({
      ios: {
        shadowColor: "rgb(50,50,50)",
        shadowRadius: 5,
        shadowOpacity: 0.5,
        shadowOffset: {
          height: -1,
          width: 0
        }
      },
      android: {
        elevation: 3
      }
    })
  },
  input: {
    padding: 20,
    borderBottomColor: "#bbb",
    borderBottomWidth: 1,
    fontSize: 25
  },
  toDos:{
    alignItems:"center"
  }
});
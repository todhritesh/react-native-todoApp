import { Text, View, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Header from './components/Header';
import TodoContainer from './components/TodoContainer';
import AddTodoContainer from './components/AddTodoContainer';

const App = () => {
  const [todoList, setTodoList] = useState([])
  const [disableSubmit, setDisableSubmit] = useState(true)
  const [todoInput, setTodoInput] = useState("")

  return (
    <View style={styles.container}>

      <Header />

      <TodoContainer todoList={todoList} setTodoList={setTodoList} />

      <AddTodoContainer disableSubmit={disableSubmit} setDisableSubmit={setDisableSubmit} todoList={todoList} setTodoList={setTodoList} todoInput={todoInput} setTodoInput={setTodoInput} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "#dfe6e9",
    position: 'relative',
    flex: 1,
    paddingLeft: 5,
    paddingRight: 5,
  },
})

export default App;


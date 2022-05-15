import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function TodoContainer({ todoList, setTodoList }) {

    async function storeData(data){
        try{
          await AsyncStorage.setItem("lists",JSON.stringify(data));
        }catch(err){
          console.log(err)
        }
      }

    function handleRemoveTodo(index) {
        const temp_data = todoList.filter(((item, i) => (i !== index)))
        setTodoList(temp_data)
        storeData(temp_data)
    }

    function handleCompletedTodo(index) {
        const data = todoList.map((item, i) => {
            if (i === index) {
                item.status = true
                return item;
            }
            return item;
        })
        storeData(data)
        setTodoList(data);
    }

    return (
        <View style={styles.todoListContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {
                    todoList.map((item, i) => (

                        <View key={i} style={{ ...styles.todoListItem, backgroundColor: `${item.status ? "#b1ffb0e6" : "white"}` }} >
                            <View style={styles.todoImage}></View>
                            <View style={{ flex: 1 }}>
                                <Text style={styles.todoTitle}>{item.todo}</Text>
                            </View>
                            <View style={styles.todoActions}>
                                {
                                    !item.status &&
                                    <View style={styles.todoCompleted} >
                                        <TouchableOpacity
                                            onPress={() => handleCompletedTodo(i)}
                                        >
                                            <EntypoIcon name="check" size={30} color="green" />
                                        </TouchableOpacity>
                                    </View>
                                }
                                <View style={styles.todoDelete} >
                                    <TouchableOpacity
                                        onPress={() => handleRemoveTodo(i)}
                                    >
                                        <EntypoIcon name="cross" size={30} color="red" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    ))
                }

                {
                    !todoList.length &&
                    <View style={styles.todoListItem} >
                        <View style={styles.todoImage}></View>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.todoTitle}>Write Your Todo </Text>
                        </View>
                        <View style={styles.todoActions}></View>
                    </View>
                }

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    todoListContainer: {
        paddingTop: 20,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        flex: 1
    },
    todoListItem: {
        borderRadius: 10,
        backgroundColor: "white",
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 20,
        elevation: 15,
        alignItems: 'center'
    },
    todoTitle: {
        fontSize: 20,
        color: 'black'
    },
    todoImage: {
        width: 30,
        height: 30,
        backgroundColor: '#81ecec',
        marginRight: 15,
        borderRadius: 10
    },
    todoActions: {
        flex: 1,
        fontSize: 20,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    todoCompleted: {
        marginRight: 5
    },
    todoDelete: {

    },
})
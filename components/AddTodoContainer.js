import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import EntypoIcon from 'react-native-vector-icons/Entypo';


export default function AddTodoContainer({ todoList, setTodoList, todoInput, setTodoInput, disableSubmit, setDisableSubmit }) {

    function handleTodoInput(val) {
        if (val === "") {
            setDisableSubmit(true)
            setTodoInput("")
            return
        }
        setDisableSubmit(false)
        setTodoInput(val)
    }

    function handleSubmit() {
        const data = {
            status: false,
            todo: todoInput
        }
        setTodoList([...todoList, data]);
        setTodoInput("");
        setDisableSubmit(true)
    }
    return (
        <View style={styles.addTodoContainer}>
            <View style={styles.addTodoInput}>
                <TextInput value={todoInput} onChangeText={(val) => handleTodoInput(val)} placeholder='Write sometthing...' style={{ fontSize: 22, paddingHorizontal: 15 }} />
            </View>
            <View style={styles.addTodoButton}>
                <TouchableOpacity onPress={() => handleSubmit()} disabled={disableSubmit} >
                    <EntypoIcon name='circle-with-plus' size={60} color={`${disableSubmit ? "grey" : "green"}`} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    addTodoContainer: {
        paddingTop: 10,
        paddingBottom: 20,
        paddingRight: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: "space-between",
        width: "100%",
        alignItems: 'center',
    },
    addTodoInput: {
        flex: 3,
        borderWidth: 2,
        borderColor: "grey",
        borderRadius: 40,
        fontSize: 30,
        height: 55
    },
    addTodoButton: {
        paddingLeft: 10,
    }
})
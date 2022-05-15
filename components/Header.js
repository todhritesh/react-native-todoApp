import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginTop: 15
    },
    headerText: {
        fontSize: 25,
        fontWeight: "bold",
        color:"black"
    },
})
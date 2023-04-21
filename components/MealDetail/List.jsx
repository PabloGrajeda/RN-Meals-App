import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const List = ({ data, ordered = false }) => {
    return data.map((dataPoint, index) => (
        <View key={index} style={styles.listItem}>
            <Text style={styles.itemText}>{ordered ? `${index + 1}. ` : ""}{dataPoint}</Text>
        </View>
    ))
}

export default List

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 8,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "#E2B497"

    },

    itemText: {
        color: "#351401",
        textAlign: "center",
    }
})
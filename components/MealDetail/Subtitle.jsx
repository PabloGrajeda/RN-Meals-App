import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

export default Subtitle

const styles = StyleSheet.create({
    subtitleContainer: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 4,
        borderBottomColor: '#E2B497',
        borderBottomWidth: 2,
    },

    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#E2B497'
    },
})
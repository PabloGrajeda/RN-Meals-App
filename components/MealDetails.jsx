import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const MealDetails = ({ duration, complexity, affordability, style, textStyle }) => {
    const detailText = [styles.detailItem, textStyle];

    return (
        <View style={[styles.details, style]}>
            <Text style={detailText}>{duration}m</Text>
            <Text style={detailText}>{complexity.toUpperCase()}</Text>
            <Text style={detailText}>{affordability.toUpperCase()}</Text>
        </View>
    )
}

export default MealDetails

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
})
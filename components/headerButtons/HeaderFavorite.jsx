import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';


const HeaderFavorite = ({ favorite, onPress }) => {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => pressed && styles.buttonPressed}
        >
            {/* <Ionicons name="heart" size={24} color="white" /> */}
            <Ionicons name={favorite ? "heart" : "heart-outline"} size={24} color="white" />
        </Pressable >
    )
}

export default HeaderFavorite

const styles = StyleSheet.create({
    buttonPressed: {
        opacity: 0.7
    },
})
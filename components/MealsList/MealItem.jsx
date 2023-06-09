import { useNavigation } from '@react-navigation/native'
import { Image, Pressable, StyleSheet, Text, View, Platform } from 'react-native'
import MealDetails from '../MealDetails';


const MealItem = ({ meal }) => {
    const { title, duration, complexity, affordability, imageUrl } = meal;
    const navigation = useNavigation();

    const handleOnPress = () => {
        navigation.navigate("MealDetails", {
            meal
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
                android_ripple={{ color: '#CCC' }}
                onPress={handleOnPress}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image
                            style={styles.image}
                            source={{
                                uri: imageUrl
                            }}
                        />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },

    pressable: {
        flex: 1
    },

    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },

    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        margin: 8,
    },

    image: {
        width: '100%',
        height: 200,
    },

    buttonPressed: {
        opacity: 0.5
    },

})
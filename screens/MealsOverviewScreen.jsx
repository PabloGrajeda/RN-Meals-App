import { StyleSheet, View, FlatList, Text } from 'react-native'
import { MEALS } from '../data/dummy-data'
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
    const { categoryId, title } = route.params;
    const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(categoryId));

    useLayoutEffect(() => {
        navigation.setOptions({
            title
        });
    }, [navigation, title])

    return (
        <View style={styles.screen}>
            <MealsList
            items={displayedMeals}
            />
        </View>
    )
}

export default MealsOverviewScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 16
    }
});
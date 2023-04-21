import { StyleSheet, FlatList, View } from 'react-native';
import MealItem from './MealItem';

const renderMealItem = ({ item: meal }) => {
    return (<MealItem meal={meal} />)
}

const MealsList = ({ items }) => {
    return (
            <FlatList
                data={items}
                renderItem={renderMealItem}
                keyExtractor={meal => meal.id}
            />
    )
}

export default MealsList

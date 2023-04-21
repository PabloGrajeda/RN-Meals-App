import { MEALS } from '../data/dummy-data';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import MealsList from '../components/MealsList/MealsList';
import { StyleSheet, View, Text } from 'react-native';
import { useSelector } from 'react-redux'
import { getFavorites } from '../store/redux/favorites';


const FavoritesScreen = () => {
  const favoritesIds = useSelector(getFavorites);

  const displayedMeals = MEALS.filter(meal => favoritesIds.includes(meal.id));


  const renderItem = displayedMeals.length ? <MealsList items={displayedMeals} /> : <NoMeals />
  return (
    <View style={styles.screen}>
      {renderItem}
    </View>
  )
}

export default FavoritesScreen

const NoMeals = () => {
  return (
    <View style={styles.noMealContainer}>
      <Text style={styles.noMealsText}>No favorite Meals added yet.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16
  },
  noMealContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noMealsText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});

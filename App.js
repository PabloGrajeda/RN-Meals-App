import { StatusBar } from 'expo-status-bar';
import { StyleSheet, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'
// Screens
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import FavoritesScreen from './screens/FavoritesScreen';
// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';
import { Provider } from 'react-redux';


// Navigators
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNAvigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#351401' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: "#3F2F25", },
        drawerContentStyle: { backgroundColor: '#351401' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#351401',
        drawerActiveBackgroundColor: '#E4BAA1',
        headerShadowVisible: false
      }}
    >
      <Drawer.Screen
        name="MealsCategories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => <Ionicons name="list" color={color} size={size} />
        }}
      />
      <Drawer.Screen
        name="FavoriteMeals"
        component={FavoritesScreen}
        options={{
          title: "Favorite Meals",
          drawerIcon: ({ color, size }) => <Ionicons name="heart" color={color} size={size} />
        }}
      />
    </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: '#351401' },
              headerTintColor: 'white',
              contentStyle: { backgroundColor: "#3F2F25", },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNAvigator}
              options={{
                // title: "All Categories",
                headerShown: false
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen
              name="MealDetails"
              component={MealDetailsScreen}
              options={({ route }) => {
                const { meal } = route.params;
                return {
                  // title: meal.title,
                  title: "About the Meal",
                }
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({

});

import { StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import HeaderFavorite from '../components/headerButtons/HeaderFavorite';
// import { FavoritesContext } from '../store/context/favorites-context';
import { addFavorite, removeFavorite, getFavorites } from '../store/redux/favorites';
import { useDispatch, useSelector } from 'react-redux';

const MealDetailsScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const favoriteMeals = useSelector(getFavorites);
    console.log({favoriteMeals})

    const { meal } = route.params
    const {
        id: mealId,
        title,
        duration,
        complexity,
        affordability,
        imageUrl,
        ingredients,
        steps
    } = meal;

    const favorite = favoriteMeals.includes(mealId);

    headerOnFavoriteHandler = () => {
        if (favorite) {
            dispatch(removeFavorite({id: mealId}));
        } else {
            dispatch(addFavorite({id: mealId}));
        }
    }

    const renderFavoriteHeader = () => {
        return <HeaderFavorite favorite={favorite} onPress={headerOnFavoriteHandler} />
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: renderFavoriteHeader
        });

    }, [navigation, renderFavoriteHeader])

    return (
        <ScrollView style={styles.screen}>
            <Image
                style={styles.image}
                source={{
                    uri: imageUrl
                }}
            />
            <Text style={styles.title}>{title}</Text>
            <MealDetails duration={duration} complexity={complexity} affordability={affordability} textStyle={styles.detailItem} />
            <View style={styles.listOuterContainer}>
                <View style={styles.listInnerContainer}>
                    <Subtitle>Igredients</Subtitle>
                    <List data={ingredients} />
                    <Subtitle>Step</Subtitle>
                    <List data={steps} ordered={true} />

                </View>
            </View>

        </ScrollView>
    )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
    screen: {
        // flex: 1,
        // padding: 16,
        marginBottom: 32,
    },

    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },

    detailItem: {
        color: 'white'
    },

    listOuterContainer: {
        alignItems: 'center'
    },

    listInnerContainer: {
        maxWidth: '80%'
    },

})
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from '../components/CategoryGridTile'

const CategoriesScreen = ({ navigation }) => {
    const handleOnPress = (categoryId, title) => {
        navigation.navigate("MealsOverview", {
            categoryId,
            title
        });
    }
    const renderCategoryItem = ({ item: category }) => {
        return (
            <CategoryGridTile
                category={category}
                onPress={handleOnPress.bind(this, category.id, category.title)}
            />
        )
    }

    return (
        <FlatList
            data={CATEGORIES}
            renderItem={renderCategoryItem}
            keyExtractor={category => category.id}
            numColumns={2}
        />
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({

})
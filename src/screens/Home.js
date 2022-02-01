
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../componets/headerComponents/HeaderTabs';
import SearchBar from '../componets/searchBar/SearchBar';
import Categories from '../componets/categories/Categories'
import RestaurantItem from '../componets/restaurantItem/RestaurantItem';
import { localRestaurants } from '../../data/localRestaurants';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../../redux/action/restaurants';


const Home = () => {
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  const dispatch = useDispatch();
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("New York");

useEffect(() => {
  dispatch(getRestaurants(city));
  setRestaurantData(restaurants.businesses);

}, [restaurants,city]);


  return (
    
    <SafeAreaView style={{
        backgroundColor: '#eee',
        flex: 1,
       
      }}>
      <View style={{
        backgroundColor: '#fff',
        padding: 10,
      }}>
        <HeaderTabs/>
        <SearchBar/>
       </View>
       <ScrollView showsVerticalScrollIndicator={false}>
         <Categories/>
         <RestaurantItem restaurantData={restaurantData} />
       </ScrollView>
      </SafeAreaView>
  
  )
};

export default Home;


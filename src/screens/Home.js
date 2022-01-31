
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../componets/headerComponents/HeaderTabs';
import SearchBar from '../componets/searchBar/SearchBar';
import Categories from '../componets/categories/Categories'
import RestaurantItem from '../componets/restaurantItem/RestaurantItem';
import { localRestaurants } from '../../data/localRestaurants';
import { useEffect, useState } from 'react';

const YELP_API_KEY = "zTMzaK2l-oEmR7nXqBvXpD-kD3IVVSPXS91KoUoWT9IfwkfCmoRG_Sc5IHsTEnoN3cI7u03SHrFQz8U7vUK1qWf4HwIlmetiQaov3W_89TcQihTZ5brHxjzCkX4YXYx";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");


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


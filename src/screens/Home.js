
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../componets/headerComponents/HeaderTabs';
import SearchBar from '../componets/searchBar/SearchBar';
import Categories from '../componets/categories/Categories'
import RestaurantItem from '../componets/restaurantItem/RestaurantItem';
import { localRestaurants } from '../../data/localRestaurants';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../../redux/action/restaurants';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottonTabs from '../componets/bottomTabs/BottonTabs';



const Home = () => {
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  const dispatch = useDispatch();
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("New York");
  const [activeTab, setActiveTab ] = useState("Delivery");



  useEffect(() => {
//   dispatch(getRestaurants(city));
//   setRestaurantData(restaurants.businesses.filter((business) => 
//   business.transactions.includes(activeTab.toLowerCase())));

   setRestaurantData(localRestaurants.filter((rest) =>
   rest.transactions.includes(activeTab.toLocaleLowerCase())));

  }, [city, activeTab]);


  return (
    
    <SafeAreaView style={{
        backgroundColor: '#eee',
        flex: 1,
      
      }}>
      <View style={{
        backgroundColor: '#fff',
        padding: 10,
      }}>
        <HeaderTabs setActiveTab={setActiveTab} activeTab={activeTab}/>
        <SearchBar setCity={setCity} />
       </View>
       <ScrollView showsVerticalScrollIndicator={false}>
         <Categories/>
         <RestaurantItem restaurantData={restaurantData} />
       </ScrollView>
       <Divider width={1}/>
       <BottonTabs/>
      </SafeAreaView>
  

  )
};

export default Home;


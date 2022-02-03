
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import HeaderTabs from '../componets/home/headerComponents/HeaderTabs';
import SearchBar from '../componets/home/searchBar/SearchBar';
import Categories from '../componets/home/categories/Categories'
import RestaurantItem from '../componets/home/restaurantItem/RestaurantItem';
import { localRestaurants } from '../../data/localRestaurants';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../../redux/action/restaurants';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import BottonTabs from '../componets/home/bottomTabs/BottonTabs';



const Home = ({navigation}) => {
  const { restaurants } = useSelector((state) => state.restaurantReducer);
  const dispatch = useDispatch();
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("New York");
  const [activeTab, setActiveTab ] = useState("Delivery");


  useEffect(() => {
  dispatch(getRestaurants(city));

  // setRestaurantData(restaurants.businesses.filter((business) => 
  // business.transactions.includes(activeTab.toLowerCase())));

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
         <RestaurantItem restaurantData={restaurantData} navigation={navigation}/>
       </ScrollView>
       <Divider width={1}/>
       <BottonTabs/>
      </SafeAreaView>
  

  )
};

export default Home;


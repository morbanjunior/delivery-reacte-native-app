import { View, Text, ScrollView} from 'react-native';
import React from 'react';
import About from '../componets/restaurantDetails/About';
import { Divider } from 'react-native-elements';
import MenuItem from '../componets/restaurantDetails/MenuItem';
import ViewCart from '../componets/restaurantDetails/ViewCart';


export default function RestaurantDetails({route, navigation}) {
  return (
    <View style={{flexWrap:"wrap"}}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name}/>
      <ViewCart navigation={navigation} restaurantName={route.params.name}/>
      
    </View>
  );
}

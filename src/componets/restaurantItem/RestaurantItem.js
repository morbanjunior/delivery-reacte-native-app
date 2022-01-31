import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';



export default function RestaurantItem({restaurantData}) {
  return (
    <TouchableOpacity 
        activeOpacity={1}
        style={{
            marginBottom: 10,
        }}
      >  
    {restaurantData.map((item, index)=>(  
        <View style={{ 
            marginTop: 10, 
            padding: 15,
            backgroundColor: 'white',
            
            }} key={index}>
            <RestaurantImage item={item}/>
            <RestaurantInfo item={item}/>
        </View>
      ))}
      </TouchableOpacity>
      
  );
}

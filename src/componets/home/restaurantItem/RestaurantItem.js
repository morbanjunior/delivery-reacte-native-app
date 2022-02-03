import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import RestaurantImage from './RestaurantImage';
import RestaurantInfo from './RestaurantInfo';



export default function RestaurantItem({navigation, restaurantData}) {
  return (
    <>
    {restaurantData.map((item, index)=>(  
        <TouchableOpacity 
        key={index}
        activeOpacity={1}
        style={{
            marginBottom: 10,
        }}
        onPress={() => navigation.navigate('Restaurant Details', {
          name: item.name,
          image: item.image_url,
          price: item.price,
          reviews: item.review_count,
          rating: item.rating,
          categories: item.categories,

        })}
         >  
          <View style={{ 
              marginTop: 10, 
              padding: 15,
              backgroundColor: 'white',
              
              }} >
              <RestaurantImage item={item}/>
              <RestaurantInfo item={item}/>
          </View>
        </TouchableOpacity>
      ))}
      
      </>
      
  );
}

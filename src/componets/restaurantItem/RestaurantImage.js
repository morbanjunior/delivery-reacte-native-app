import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RestaurantImage({item}) {
  return (
    <View>
      <Image
        source={{
            uri: item.image_url,
        }}
        style={{
            width: '100%',
            height: 180,
        }}
      />
      <TouchableOpacity style={{
          position: 'absolute',
          right: 20,
          top: 20,
      }}>
          <MaterialCommunityIcons name="heart-outline" size={24} color='#fff'/>
      </TouchableOpacity>
    </View>
  );
}

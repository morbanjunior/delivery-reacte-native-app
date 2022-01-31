import { View, Text } from 'react-native';
import React from 'react';

export default function RestaurantInfo({item}) {
  return (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,

    }}>
      <View>
        <Text style={{
            fontSize: 15, 
            fontWeight: "bold",
        }}>
            {item.name}</Text>
        <Text style={{
            fontSize: 13, 
            color: "gray"
        }}>
            30-44 min</Text>
      </View>
      <View style={{ 
          backgroundColor: '#eee', 
          height: 30, width: 30, 
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,

      }}>
        <Text>{item.rating}</Text>
      </View>
    </View>
  );
}

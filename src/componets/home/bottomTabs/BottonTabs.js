import { View, Text } from 'react-native';
import React from 'react';
import Icon from './Icon';

const listIcon = [
    {
        text: 'Home',
        icon: 'home'
    },
    {
        text: 'Browse',
        icon: 'search'
    },
    {
        text: 'Grocery',
        icon: 'shopping-bag'
    },
    {
        text: 'Orders',
        icon: 'receipt'
    },
    {
        text: 'Account',
        icon: 'user'
    },
]

export default function BottonTabs() {
  return (
    <View style={{ 
     flexDirection: "row",
     margin:10,
     marginHorizontal:30, 
     justifyContent: 'space-between',
    }}>
        {listIcon.map((item, index) =>(
            <Icon iconbottom ={item.icon} text={item.text} key={index}/>
        ))}
    
    </View>
  );
}


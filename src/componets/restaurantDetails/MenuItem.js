import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useSelector, useDispatch } from 'react-redux';


const styles= StyleSheet.create({
    menuItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
        // backgroundColor: 'white',
        
    
    },
    title:{
        fontSize: 19, 
        fontWeight: "600",
    }
})

export default function MenuItem({restaurantName, foods, hideCheckbox, marginLeft,}) {

    const dispatch = useDispatch();

    const selectedItems = (item, checkboxValue) => 
        dispatch({
            type: "ADD_TO_CART",
            payload: {...item, restaurantName: restaurantName, checkboxValue: checkboxValue,},
        });
    
    const cartItems = useSelector((state) => 
    state.cartReducer.selectedItems.items);

    const isFoodIncart = (food, cartItems) =>(
        Boolean(cartItems.find((item) => item.title === food.title))
        );

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index)=>(
        <View key={index} >
           <View style={styles.menuItem}>
               {hideCheckbox ? (<></>) : (<BouncyCheckbox
                iconStyle={{ borderColor: 'lightgreen' }}
                fillColor="green"
                onPress={(checkboxValue) => selectedItems(food, checkboxValue)}
                isChecked = {isFoodIncart(food, cartItems)}
               />)}
             <FoodInfo food={food}/>
             <FoodImage image={food.Image_url} marginLeft={marginLeft ? marginLeft : 0}/>
           </View>
           <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20}} />
        </View>
          ))}
    </ScrollView>
   
  );
}

const FoodInfo = ({food}) =>(
    <View style={{ 
        width: 240, justifyContent: "space-evenly", 
    }}>
        <Text style={styles.title}>{food.title}</Text>
        <Text>{food.description}</Text>
        <Text>{food.price}</Text>

    </View>
   
);

const FoodImage = ({image, marginLeft}) =>(
    <Image source={{ uri: image }} style={{
         width: 100, 
         height: 100,
         borderRadius: 30,
         marginLeft: marginLeft,

        
         
        }}
    />
);


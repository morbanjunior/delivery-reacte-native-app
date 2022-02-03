import { View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useSelector, useDispatch } from 'react-redux';


const foods =[
    {
        title: "Lasagna",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        Image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH997h_LhuTfMIPJzsS-W8SlhWou_FgMUf0A&usqp=CAU",
    },
    {
        title: "Chimi",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$25.50",
        Image_url: "https://cdn.vox-cdn.com/thumbor/g2CStnaVwZbFeTuyDlB5JdLgR6E=/0x0:2000x1335/1200x0/filters:focal(0x0:2000x1335):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/19348402/Chimi.jpg",
    },
    {
        title: "Pollo Frito",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        Image_url: "https://s1.eestatic.com/2018/01/30/cocinillas/cocinillas_281236434_116478423_1706x960.jpg",
    },
    {
        title: "Lasagna",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$10.50",
        Image_url: "https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg",
    },
    {
        title: "Ensalada",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$25.50",
        Image_url: "http://www.comedera.com/wp-content/uploads/2015/10/ensalada-de-pollo.jpg",
    },
    {
        title: "Arroz con Pollo",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$24.50",
        Image_url: "https://www.recetips.com/uploads/recetas_ce89af3170d309eea9addbf67a3bc639.jpg",
    },
    {
        title: "Frito con Salami",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$50.50",
        Image_url: "https://d3d4s9jdu9j4x0.cloudfront.net/wp-content/uploads/2017/04/26132519/torre_de_salami.jpg",
    },
    ,
    {
        title: "Lasagna",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$10.50",
        Image_url: "https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg",
    },
    {
        title: "Ensalada",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$25.50",
        Image_url: "http://www.comedera.com/wp-content/uploads/2015/10/ensalada-de-pollo.jpg",
    },
    {
        title: "Arroz con Pollo",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$24.50",
        Image_url: "https://www.recetips.com/uploads/recetas_ce89af3170d309eea9addbf67a3bc639.jpg",
    },
    {
        title: "Frito con Salami",
        description: "With Butter lettuce, tomato and sauce bechamel",
        price: "$50.50",
        Image_url: "https://d3d4s9jdu9j4x0.cloudfront.net/wp-content/uploads/2017/04/26132519/torre_de_salami.jpg",
    },
]

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

export default function MenuItem({restaurantName}) {

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
               <BouncyCheckbox
                iconStyle={{ borderColor: 'lightgreen' }}
                fillColor="green"
                onPress={(checkboxValue) => selectedItems(food, checkboxValue)}
                isChecked = {isFoodIncart(food, cartItems)}
               />
             <FoodInfo food={food}/>
             <FoodImage image={food.Image_url}/>
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

const FoodImage = ({image}) =>(
    <Image source={{ uri: image }} style={{
         width: 100, 
         height: 100,
         borderRadius: 30,
         marginLeft: -20,
        
         
        }}
    />
);


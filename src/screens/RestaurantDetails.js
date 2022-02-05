import { View, Text, ScrollView} from 'react-native';
import React, { useState } from 'react';
import About from '../componets/restaurantDetails/About';
import { Divider } from 'react-native-elements';
import MenuItem from '../componets/restaurantDetails/MenuItem';
import ViewCart from '../componets/restaurantDetails/ViewCart';
import { CheckoutModelContent } from '../componets/restaurantDetails/ModalView'
import { useSelector } from 'react-redux';
import firebase from '../../firebase'



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


export default function RestaurantDetails({route, navigation}) {
  const [modelVisible, setModelVisible] = useState(false);

  // totoal from store
  const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);
  
  const total = items
  .map((item) => Number(item.price.replace('$', '')))
  .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  console.log(totalUSD);

  // end here
  
  ///Firebase funtion
  const addOrderToFireBase = () => {
    const db = new firebase.firestore();
    db.collection("orders").add({
      items: items,
      restaurantName: restaurantName, 
      createAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    setModelVisible(false);
    navigation.navigate('Order completed');
  }
  //end here.

  return (
    <View style={{flexWrap:"wrap"}}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods}/>
      <ViewCart 
      navigation={navigation} 
      restaurantName={route.params.name} 
      setModelVisible={setModelVisible} 
      modelVisible={modelVisible} 
      total={total} 
      totalUSD={totalUSD}/>
      <CheckoutModelContent 
      addOrderToFireBase={addOrderToFireBase}
      total={total}
      totalUSD ={totalUSD}
      items={items}
      restaurantName={restaurantName}
      setModelVisible={setModelVisible} 
      modelVisible={modelVisible}/>
    </View>
  );
}

import { View, Text, ScrollView} from 'react-native';
import React, { useState } from 'react';
import About from '../componets/restaurantDetails/About';
import { Divider } from 'react-native-elements';
import MenuItem from '../componets/restaurantDetails/MenuItem';
import ViewCart from '../componets/restaurantDetails/ViewCart';
import { CheckoutModelContent } from '../componets/restaurantDetails/ModalView'
import { useSelector } from 'react-redux';


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
  

  return (
    <View style={{flexWrap:"wrap"}}>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name}/>
      <ViewCart 
      navigation={navigation} 
      restaurantName={route.params.name} 
      setModelVisible={setModelVisible} 
      modelVisible={modelVisible} 
      total={total} 
      totalUSD={totalUSD}/>
      <CheckoutModelContent 
      total={total}
      totalUSD ={totalUSD}
      items={items}
      restaurantName={restaurantName}
      setModelVisible={setModelVisible} 
      modelVisible={modelVisible}/>
    </View>
  );
}

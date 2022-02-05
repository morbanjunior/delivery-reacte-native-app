import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React, { useState, useEffect }from 'react';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import firebase from '../../firebase'
import MenuItem from '../componets/restaurantDetails/MenuItem';

export default function OrderCompleted() {


  const [lastOrder, setLastOrder] = useState({
    items:[
   {
     title: "Lasagna",
     description: "With Butter lettuce, tomato and sauce bechamel",
     price: "$10.50",
     Image_url: "https://www.cookingclassy.com/wp-content/uploads/2013/03/lasagna15.jpg",
  }
 ]
});

   // totoal from store
   const {items, restaurantName} = useSelector((state) => state.cartReducer.selectedItems);

   const total = items
   .map((item) => Number(item.price.replace('$', '')))
   .reduce((prev, curr) => prev + curr, 0);
 
   const totalUSD = total.toLocaleString("en", {
     style: "currency",
     currency: "USD",
   });
 
   // end here


useEffect(() => {
  const db = firebase.firestore();
  const unsubscribe = db
    .collection("orders")
    .orderBy("createdAt", "desc")
    .limit(1)
    .onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        setLastOrder(doc.data());
        console.log('Ordendes dede la db')
      });
    });

  return () => unsubscribe();
}, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
    <View style={{
      margin: 15,
      alignItems: "center",
      height: "100%",
    }}>
      <LottieView
       style={{ 
         height: 100, 
         alignSelf: "center",
         marginBottom: 30,
       }}
       source={require("../../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
      />
      <Text style={{
        fontSize: 20, fontWeight: "bold"
      }}>
          Your Order at {restaurantName} has been placed for {totalUSD}
      </Text>
      <ScrollView>
      
          <MenuItem foods={lastOrder.items} hideCheckbox={true}/>
      </ScrollView>
      <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
    </View>
    </SafeAreaView>
  );
}

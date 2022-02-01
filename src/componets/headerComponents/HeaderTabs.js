import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import HederButton from './HederButton';



const HeaderTabs = ({activeTab, setActiveTab}) => { 


  return (  
      <View style={styles.container}>
        <HederButton name="Delivery"
         activeTab={activeTab}
         setActiveTav={setActiveTab}
         />
        <HederButton name="PickUp"
         activeTab={activeTab}
         setActiveTav={setActiveTab}
         />
      </View>);
};

export default HeaderTabs;


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf:'center',
     
    },
  });
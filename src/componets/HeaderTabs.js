import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import HederButton from './HederButton';



const HeaderTabs = () => { 

  const [activeTab, setActiveTav] = useState("Delivery");

  return (  
      <SafeAreaView style={styles.container}>
        <HederButton name="Delivery"
         btncolor="black" 
         textcolor="white"
         activeTab={activeTab}
         setActiveTav={setActiveTav}
         />
        <HederButton name="Pick Up"
         btncolor="white" 
         textcolor="black" 
         activeTab={activeTab}
         setActiveTav={setActiveTav}
         />
      </SafeAreaView>);
};

export default HeaderTabs;


const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignSelf:'center',
      marginTop:30,
    },
  });
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import HederButton from './HederButton';



const HeaderTabs = () => { 

  const [activeTab, setActiveTav] = useState("Delivery");

  return (  
      <View style={styles.container}>
        <HederButton name="Delivery"
         activeTab={activeTab}
         setActiveTav={setActiveTav}
         />
        <HederButton name="Pick Up"
         activeTab={activeTab}
         setActiveTav={setActiveTav}
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
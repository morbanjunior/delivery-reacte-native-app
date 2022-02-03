import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const HederButton = ({name, activeTab, setActiveTav}) => {
  return (
          <TouchableOpacity style={{
            paddingVertical: 6,
            paddingHorizontal: 16,
            backgroundColor: activeTab === name ? "black" : "white",
            borderRadius: 30,
           
          }} 
          onPress={()=> setActiveTav(name)}
          >
             <Text style={{
                 color: activeTab === name ? "white" : "black", 
                 fontSize:16,
                 fontWeight: "900",
                 }}>
                     {name}
                     
                </Text>
                
          </TouchableOpacity>
  );
};

export default HederButton;


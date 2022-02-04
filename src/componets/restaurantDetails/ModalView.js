import { View, Text, TouchableOpacity, Modal, StyleSheet} from 'react-native';
import OrderItems from './OrderItems';
export const CheckoutModelContent =
    ({setModelVisible, modelVisible, restaurantName, items, totalUSD, total}) =>{
    return (
        <>
         <Modal 
    animationType='slide'
    visible={modelVisible}
    transparent={true}
    //onRequestClose={setModelVisible(false)}
    >
        <View style={styles.modalContainer}>
            <View style={styles.modalCheckoutContainer}>
                <Text style={styles.restaurantName}>{restaurantName}</Text>
                {
                    items.map((item, index) =>(
                        <OrderItems key={index} item={item}/>
                    ))
                }
                <View style={styles.subtotalContainer}>
                    <Text style={styles.subtotalText}>Subtotal</Text>
                    <Text>{totalUSD}</Text>
                </View>
                <View style={{
                    flexDirection: "row",
                    justifyContent: "center"
                }}>
                <TouchableOpacity style={{
                    marginTop: 20,
                    backgroundColor: "black",
                    alignItems: "center",
                    padding: 13, 
                    borderRadius: 30,
                    width: 300, 
                    position: 'relative',
                }}
                onPress={()=>setModelVisible(false)}
                >
                    <Text style={{
                        color: "white",
                        fontWeight: "600",
                        fontSize:20,
                    }}>Checkout</Text>
                    <Text style={{
                        position: "absolute",
                        color: "white",
                       
                        fontSize:20,
                        right: 20,
                        top: 12,
                    }}>{total ? totalUSD : ""}</Text>
                </TouchableOpacity>
                </View>
            </View>
        </View>
      </Modal>
      </>
    )
  };

  const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: "rgba(0,0,0,0.7)"


        },
        modalCheckoutContainer: {
            backgroundColor: "white",
            padding:16,
            height: 500,
            borderWidth: 1,
        },
        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "600",
            fontSize:15,
            marginBottom: 10,
        },
        
  })
  
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { View, Text, TouchableOpacity } from 'react-native';

const Icon = ({iconbottom, text}) => {
    return (
        <TouchableOpacity>
      <View>
    <FontAwesome5
      name={iconbottom}
      size={25}
      style={{
          marginBottom: 3,
          alignSelf: "center",
      }}
    />
     <Text>{text}</Text>
    </View>
    </TouchableOpacity>
    )
};

export default Icon;
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { Provider } from 'react-redux';
import { Store } from './redux/store';

const App = () => {
  return (
    <Provider store={Store}>
        <Home/>
    </Provider>
   
  );
}


export default App;
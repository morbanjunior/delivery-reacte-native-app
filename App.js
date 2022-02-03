import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { Store } from './redux/store';
import RootNavigation from './navigation';


const App = () => {
  return (
    <Provider store={Store}>
      <RootNavigation/>
    </Provider>
   
  );
}


export default App;
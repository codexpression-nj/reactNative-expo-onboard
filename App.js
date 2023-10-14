import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import OnBoardingSceen from './pages/onBoardingScreen';
import Landing from './pages/landing';

export default function App() {
  return (
    <View style={styles.container}>
     <OnBoardingSceen/> 
     {/* <Landing/>   */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

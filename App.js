import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

import Tittle from './src/components/tittle';
import Main from './src/components/main';
export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Tittle/>
      <Main/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#293039',
    paddingTop:30
  },
});

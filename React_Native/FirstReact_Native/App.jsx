import { StatusBar } from 'expo-status-bar';
import { StyleSheet,TextInput, Text, View,ScrollView,Image } from 'react-native';
const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 120,
  height: 120,
};
export default function App() {
  return (
      <ScrollView >
        <Text>asd</Text>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  X:{
    color: '#FF0000',
    alignSelf:"center",
    margin:40,
  },
  img:{
    display:"block",
  }

});

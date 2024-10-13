import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [vidas, setVidas] = useState(5)
  const gameOver = () => {
    Alert.alert("ADVERTENCIA", "GAME OVER")
  }
  return (
    <View style={styles.container}>
      <Text>Vidas: {vidas}</Text>
      <StatusBar style="auto" />
      <Button
        title='PERDER VIDA'
        onPress={() => {
          if(vidas > 0){
            setVidas(vidas - 1)
          } else {
            gameOver()
          }
        }}
      />
      <Button
        title='PREMIAR'
        onPress={() => {
          setVidas(vidas + 3)
        }}
      />
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

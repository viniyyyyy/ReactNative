import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        "Ouse Consquistar a si mesmo"
      </Text>
      <Text style={styles.subtitle}>
        -Friedrich Nietzsche

      </Text>
      <button title="enviar"></button>
      <StatusBar style="auto"/>
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

  title: {
    color: "#8F2D56",
    fontSize: "3rem",
    fontWeight:"bold"    
  },

  subtitle: {
    color: "#D81159",
    fontSize: "2rem",
    fontWeight:"bold"    
  }
});

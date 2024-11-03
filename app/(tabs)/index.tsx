import { StyleSheet,View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={s.container}>
      <Text style={s.text}>Accueil
      </Text>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  text: {
    alignItems: 'center',
  },
});

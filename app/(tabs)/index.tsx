import { StyleSheet,View } from 'react-native';
import BoxCard from "../../components/box-card"

export default function HomeScreen() {
  return (
    <View style={s.container}>
      <BoxCard/>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    alignItems: 'center',
  },
});

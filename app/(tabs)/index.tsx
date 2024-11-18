import { StyleSheet,View, Text, Pressable } from 'react-native';
import BoxCard from "../../components/box-card"
import { Link } from 'expo-router';
import Modal from '../modal';

export default function HomeScreen() {
  return (
    <View style={s.container}>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            >
            <Link
              href={{
                pathname: '/(tabs)/map',
                params: { longitude: 13.5389, latitude: 52.3579 },
              }}
              asChild
            >
              <Text style={styles.textStyle}>Trouver Berlin</Text>
            </Link>

        </Pressable>
        <Modal/>
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



const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

});








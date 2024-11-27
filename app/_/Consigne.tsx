import { PickerDropdown } from '@/components/dropdown-menu';
import { Link, useLocalSearchParams } from 'expo-router';
import { View, Text, Pressable } from 'react-native';
import Box from '../../components/models/box';
import { BOXES } from '../../components/models/mock-boxes';
import { useState } from 'react';

export default function CaissePage() {

  const [boxes, setBoxes] = useState<Box[]>(BOXES);
  const { id } = useLocalSearchParams();
  const box:Box | undefined = BOXES.find((box) => box.id.toString() === id);



  return (
    <View>
      <Text>Caisse#{id}</Text>
      <Text>Située à {box?.location.name}</Text>
      <PickerDropdown boxProp={box} />
      <Pressable>
              <Link
              href={{
                pathname: '/(tabs)/dispatch',
             }}
              asChild
            >              
                <Text>Enregistrer</Text>
              </Link>
      </Pressable>
    </View>
  );
}
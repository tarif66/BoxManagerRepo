import { StyleSheet,View, ScrollView } from 'react-native';
import React, { useState } from 'react';

import BoxCard from "../../components/box-card"
import Box from "../../components/models/box"
import { BOXES } from "../../components/models/mock-boxes"

export default function TabTwoScreen() {
    const [boxes, setBoxes] = useState<Box[]>(BOXES);

  return (
    <ScrollView>
        <View style={s.container}>
            <View style={s.row}>
            {boxes.map(boxMap => (
                <BoxCard key={boxMap.id} boxProp={boxMap}/>
            ))}
            </View>
        
        </View>
    </ScrollView>
  );
}

const s = StyleSheet.create({
  container: {
    paddingTop: 32,
    alignItems: 'center',
    flex: 1,
    margin: 8,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 16,
  },
});

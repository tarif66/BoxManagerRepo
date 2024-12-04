import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Svg, { Circle, Text as SvgText } from 'react-native-svg';
import Animated, { Easing, useSharedValue, useAnimatedProps, withTiming } from 'react-native-reanimated';
import { Ionicons } from "@expo/vector-icons";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const PieChartSegment = ({ center, radius, strokeWidth, color, circumference, angle, percent, progress }: { center: number, radius: number, strokeWidth: number, color: string, circumference: number, angle: number, percent: number, progress: Animated.SharedValue<number> }) => {
  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset = circumference * (1 - percent) * progress.value;
    const rotateAngle = angle - 90; // Adjust the angle to start at the top

    return {
      strokeDashoffset,
      transform: [{ rotate: `${rotateAngle}deg` }],
    };
  });

  return (
    <AnimatedCircle
      cx={center}
      cy={center}
      r={radius}
      strokeWidth={strokeWidth}
      stroke={color}
      strokeDasharray={circumference}
      animatedProps={animatedProps}
    />
  );
};

export const PieChart = ({ size = 200, strokeWidth = 20, data, centerText, setModalVisibleProp }: { size?: number, strokeWidth?: number, data: { color: string, percent: number }[], centerText: string, setModalVisibleProp: any }) => {
  const [startAngles, setStartAngles] = useState<number[]>([]);
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = useSharedValue(0);

  useEffect(() => {
    let angle = 90;
    const angles: number[] = [];
    data.forEach(item => {
      angles.push(angle);
      angle += item.percent * 360;
    });

    setStartAngles(angles);

    progress.value = withTiming(1, {
      duration: 1000,
      easing: Easing.out(Easing.exp),
    });
  }, [data]);

  return (
    <View style={[s.pieChart, { width: size, height: size }]}>
      <Svg viewBox={`0 0 ${size} ${size}`}>
        {data.map((item, index) => (
          <PieChartSegment
            key={`${item.color}-${index}`}
            center={center}
            radius={radius}
            circumference={circumference}
            angle={startAngles[index]}
            color={item.color}
            percent={item.percent}
            strokeWidth={strokeWidth}
            progress={progress}
          />
        ))}
        <Circle
          cx={center}
          cy={center}
          r={radius - strokeWidth}
          fill="#F0F0F0"
        />
        <SvgText
          x={center}
          y={center}
          textAnchor="middle"
          dy=".3em"
          fontSize="70"
          fill="#3B4E45"
        >
          {centerText}
        </SvgText>
      </Svg>
      <Pressable onPress={() => setModalVisibleProp(true)} style={s.buttonPieChart}>
        <Ionicons name="pencil-outline" size={40} color="#3B4E45" />
      </Pressable>
    </View>
  );
};




const s = StyleSheet.create({
    pieChartIcon: {
        // position: 'absolute',
        // top: 76,
        // left: 22,
      },
    buttonPieChart: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: [{ translateX: -20 }, { translateY: -20 }],
      padding: 8,
      },
    iconsBoxToGive: {
        position: 'absolute',
        top: 50,
        left: -58,
        width: 200,
        height: 200,
        display: 'flex',
        flexDirection: 'column',
        // justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        },
    number: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#3B4E45',
    },
    pieChart: {
  
      },
});
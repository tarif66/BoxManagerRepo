import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Svg, { Circle, Text as SvgText, Image as SvgImage } from 'react-native-svg';


const PieChartSegment = ({ center, radius, strokeWidth, color, circumference, angle, percent }: { center: number, radius: number, strokeWidth: number, color: string, circumference: number, angle: number, percent: number }) => {
    const strokeDashoffset = circumference * (1 - percent);
    const rotateAngle = angle - 90; // Adjust the angle to start at the top
  
    return (
      <Circle
        cx={center}
        cy={center}
        r={radius}
        strokeWidth={strokeWidth}
        stroke={color}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        transform={`rotate(${rotateAngle}, ${center}, ${center})`}
      />
    );
  };
  
export const PieChart = ({ size = 200, strokeWidth = 20, data, centerText, setModalVisibleProp }: { size?: number, strokeWidth?: number, data: { color: string, percent: number }[], centerText: string, centerIcon: any, setModalVisibleProp:any }) => {
    const [startAngles, setStartAngles] = useState<number[]>([]);
    const center = size / 2;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        let angle = 0;
        const angles: number[] = [];
        data.forEach(item => {
        angles.push(angle);
        angle += item.percent * 360;
        });

        setStartAngles(angles);
    }, [data]);

    return (
        <View style={{ width: size, height: size }}>
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
            />
            ))}
            <Circle
            cx={center}
            cy={center}
            r={radius}
            fill="#fff"
            />
            <View style={s.iconsBoxToGive}>
              <Ionicons name="arrow-up-outline" size={24} color="#829E91" style={s.pieChartIcon} />
              <Ionicons name="cube-outline" size={48} color="#829E91" style={s.pieChartIcon} />
            </View>

            <SvgText
            x={center}
            y={center}
            textAnchor="middle"
            dy=".3em"
            fontSize="70"
            fill="black"
            >
            {centerText}
            </SvgText>
        </Svg>
        <Pressable onPress={() => setModalVisibleProp(true)} style={s.buttonPieChart}>
          <Ionicons name="pencil-outline" size={40} color="black" />
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
        // position: 'absolute',
        top: -125,
        right: -130,
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
});
//import liraries
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';
import { COLORS } from '../contants/theme';
import { AntDesign } from '@expo/vector-icons';

// create a component
const NextButton = ({ percentage }) => {
    console.log(percentage);
    const size = 75
    const center = size / 2
    const strokeWidth = 2
    const raduis = size / 2 - strokeWidth
    const circumference = 2 * Math.PI * raduis

    const progressAnimation = useRef(new Animated.Value(0)).current
    const progressRef = useRef(null)

    const animation = (toValue) => {
        return Animated.timing(progressAnimation, {
            toValue,
            duration: 250,
            useNativeDriver: true
        }).start()
    }

    useEffect(() => {
        animation(percentage)
    }, [percentage])

    useEffect(() => {
        progressAnimation.addListener((value) => {
            const strokeDashoffset = circumference - (circumference + value.value) / 100
            if (progressRef?.current) {
                progressRef.current.setNativeProps({
                    strokeDashoffset
                })
            }
        },[percentage])
    }, )
    return (
        <View style={styles.container}>
            <Svg width={size} height={size} fill={'transparent'}>
                <G rotation="-90" origin={center}>
                    <Circle
                        stroke="#C4C4C4"
                        cx={center}
                        cy={center}
                        r={raduis}
                        strokeWidth={strokeWidth}/>

                        <Circle
                            ref={progressRef}
                            stroke={COLORS.secondary}
                            cx={center}
                            cy={center}
                            r={raduis}
                            strokeWidth={strokeWidth}
                            strokeDasharray={circumference}
                            strokeDashoffset={ circumference - (circumference * percentage) / 100}

                        />
                </G>
            </Svg>
            <TouchableOpacity style={styles.button}>
                <AntDesign name='arrowright' size={18} color={'#fff'} />
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    button: {
        position: 'absolute',
        backgroundColor: COLORS.secondary,
        borderRadius: 100,
        padding: 20
    }
});

//make this component available to the app
export default NextButton;

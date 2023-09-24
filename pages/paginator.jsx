//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, useWindowDimensions } from 'react-native';
import { COLORS } from '../contants/theme';

// create a component
const Paginator = ({ data, scrollX }) => {
    const width = useWindowDimensions()

    return (
        <View style={[styles.view,{
             width: width.width,
        }]}>
            {data.map((_, i) => {
                const inputRange = [(i - 1) * width.width, i * width.width, (i + 1) * width.width];

                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp'
                })

                const opacity = scrollX.interpolate({
                    inputRange,
                    outputRange: [0.3, 1, 0.3],
                    extrapolate: 'clamp'
                })

                return <Animated.View style={[styles.dots, { width: dotWidth, opacity }]} key={i.toString()} />


            })}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },
    dots: {
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.secondary,
        marginHorizontal: 8,
        width: 10, justifyContent: 'center',
        alignItems: 'center',
    },view:{
        flexDirection: 'row', 
        height: 64, 
        justifyContent: 'center',
        alignItems: 'center',
    }
});

//make this component available to the app
export default Paginator;

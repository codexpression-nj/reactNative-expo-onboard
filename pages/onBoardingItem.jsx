//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions, Button, TouchableOpacity } from 'react-native';
import { COLORS } from '../contants/theme';

// create a component
const OnBoardingItem = ({ item }) => {
    const { width } = useWindowDimensions()
    return (
        <View style={[styles.container, { width, backgroundColor:item.backgroundColor}]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
            <View style={{ flex: 0.3 }}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subTitle}>{item.subTitle}</Text>
                <Text style={styles.description}>{item.description}</Text>
            </View>
          <TouchableOpacity>
            <Text>Next</Text>
          </TouchableOpacity>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    
    },
    image: {
        flex: 0.7,
    }, title: {
        fontWeight: '800',
        fontSize: 28,
        marginBottom: 10,
        color: COLORS.secondary,
        paddingHorizontal: 20

    },
    subTitle: {
        fontWeight: '600',
        fontSize: 24,
        marginBottom: 10,
        color: COLORS.secondary,
        paddingHorizontal: 20

    },
    description: {
        fontWeight: '300',
        fontSize:14,
        color: COLORS.secondary, 
        paddingHorizontal: 20
    }
});

//make this component available to the app
export default OnBoardingItem;

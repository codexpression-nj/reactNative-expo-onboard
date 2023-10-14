//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '../contants/theme';

// create a component
const Landing = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/landingImg.png')} style={[styles.image]} />
            <View style={styles.btnContainer}>
                <Text style={styles.title}>The Furniture App That </Text>
                <Text style={styles.subTitle}>Elevates Your Home</Text>
                <Text style={styles.text}>
                    Shop all top stylish furniture to make your space elegant and stylish.
                </Text>
                <TouchableOpacity style={styles.getStartedBtn}>
                    <Text style={styles.btnText}>Let's Get Started</Text>
                </TouchableOpacity>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Text style={styles.haveAccountText}>Already have an account? </Text>
                    <TouchableOpacity><Text style={styles.signInBtn}>SignIn</Text></TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
    getStartedBtn: {
        backgroundColor: COLORS.tertiary,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
        padding: 10,
        borderRadius: 40,
        width: '90%'
    },
    btnText: {
        color: COLORS.lightWhite
    },
    title: {
        color: COLORS.tertiary,
        fontWeight: 'bold',
        fontSize: 23,

    }, subTitle: {
        fontWeight: '600',
        fontSize: 20, marginBottom: 20
    }, btnContainer: {
        position: 'absolute',
        bottom: 0,
        alignContent: "center",
        alignItems: 'center',
        margin: 16
    }, image: {
        width: 440,
        height: 490,
        resizeMode: 'contain',
        marginTop: 40
    },
    text: {
        color: COLORS.secondary,
        margin: 16,
        textAlign: 'center',
        fontWeight:'300'

    },
    signInBtn: {
        color:COLORS.tertiary
    },
    haveAccountText: {
        fontSize: 10,
        // color: COLORS.secondary
    }

});

//make this component available to the app
export default Landing;

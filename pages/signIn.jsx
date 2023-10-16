//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity ,Image} from 'react-native';

// create a component
const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text>SignIn</Text>
            <TouchableOpacity>
                <Image source={require('../assets/gm.png')} />
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
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default SignIn;

//import liraries
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated, FlatList, useWindowDimensions } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import { COLORS } from '../contants/theme';
import slides from '../data/slides';
import OnBoardingItem from './onBoardingItem';
import Paginator from './paginator';

// create a component
const OnBoardingSceen = () => {
    const [currentStateIndex, setCurrentStateIndex] = useState(0)
    const scrollX = useRef(new Animated.Value(0)).current

    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentStateIndex(viewableItems[0].index)
    }).current

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

    const slideRef = useRef(null)

    return (
        <View style={styles.container}>
            <View style={{ flex:1 }}>
                <FlatList
                    horizontal
                    data={slides}
                    renderItem={({ item }) => <OnBoardingItem item={item} />}
                    
                    pagingEnabled
                    bounces={false}
                    keyExtractor={(item) => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                        useNativeDriver: false,
                    })}
                    onViewableItemsChanged={(viewableItemsChanged)}
                    viewabilityConfig={viewConfig}
                    scrollEventThrottle={32}
                    ref={slideRef}
                />
            </View>
            <Paginator data={slides} scrollX={scrollX}/>
        </View>

    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default OnBoardingSceen;

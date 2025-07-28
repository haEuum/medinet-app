import React from "react";
import { View, StyleSheet } from "react-native";
import Map from "src/components/map";

const MapScreen = () => {
    return (
        <View style={styles.container}>
            <Map />
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
import React, { useEffect, useState } from "react";
import { ActivityIndicator, Dimensions, View } from "react-native";
import MapView, { Marker, Region } from "react-native-maps";
import * as Location from "expo-location";

const Map = () => {
    const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== "granted") {
                console.warn("위치 권한이 거부되었습니다.");
                setLoading(false);
                return;
            }

            const currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation.coords);
            setLoading(false);
        })();
    }, []);

    if (loading || !location) {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }

    const region: Region = {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    };

    return (
        <MapView style={{ width: Dimensions.get("window").width, height: Dimensions.get("window").height }} region={region}>
            <Marker coordinate={{ latitude: location.latitude, longitude: location.longitude }} title="내 위치" />
        </MapView>
    );
};

export default Map;
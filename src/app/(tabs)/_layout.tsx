import { Tabs } from "expo-router";
import Home from "src/components/ui/icons/bottombar/home";
import Profile from "src/components/ui/icons/bottombar/profile";
import Chat from "src/components/ui/icons/bottombar/chat";
import Triage from "src/components/ui/icons/bottombar/triage";
import {Platform} from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#0047AB",
                tabBarInactiveTintColor: "#7F8C8D",
                tabBarStyle: {
                    backgroundColor: "#fff",
                    height: 60,
                    paddingBottom: Platform.OS === "ios" ? 20 : 8,
                    paddingTop: 6,
                    borderTopWidth: 0.5,
                    borderTopColor: "#ccc",
                },
            }}
        >
            <Tabs.Screen
                name="main/index"
                options={{
                    tabBarIcon: ({ color }) => <Home fill={color} />,
                    tabBarLabel: "",
                }}
            />
            <Tabs.Screen
                name="chat/index"
                options={{
                    tabBarIcon: ({ color }) => <Chat fill={color} />,
                    title: "",
                }}
            />
            <Tabs.Screen
                name="triage/index"
                options={{
                    tabBarIcon: ({ color }) => <Triage fill={color} />,
                    title: "",
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    tabBarIcon: ({ color }) => <Profile fill={color} />,
                    title: "",
                }}
            />
        </Tabs>
    );
}
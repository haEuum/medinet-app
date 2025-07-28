import { Tabs } from "expo-router";
import Home from "src/components/ui/icons/bottombar/home";
import Profile from "src/components/ui/icons/bottombar/profile";
import Chat from "src/components/ui/icons/bottombar/chat";
import Triage from "src/components/ui/icons/bottombar/triage";
import { Platform } from "react-native";

export default function TabsLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#0047AB",
                tabBarInactiveTintColor: "#7F8C8D",
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "#fff",
                    height: 60,
                    marginBottom: Platform.OS === "ios" ? 24 : 12,
                    marginHorizontal: 16,
                    paddingBottom: Platform.OS === "ios" ? 20 : 8,
                    paddingTop: 6,
                    borderRadius: 20,
                    elevation: 5,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 3 },
                    shadowOpacity: 0.06,
                    shadowRadius: 5,
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
                    tabBarLabel: "",
                }}
            />
            <Tabs.Screen
                name="triage/index"
                options={{
                    tabBarIcon: ({ color }) => <Triage fill={color} />,
                    tabBarLabel: "",
                }}
            />
            <Tabs.Screen
                name="profile/index"
                options={{
                    tabBarIcon: ({ color }) => <Profile fill={color} />,
                    tabBarLabel: "",
                }}
            />
        </Tabs>
    );
}
import { Tabs } from 'expo-router';
import MainIcon from 'src/components/ui/icons/main';
import ChatIcon from 'src/components/ui/icons/chat';
import TriageIcon from 'src/components/ui/icons/triage';
import ProfileIcon from 'src/components/ui/icons/profile';
import sementic from "src/styles/color/sementic";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: sementic.Primary.Alternative,
                tabBarInactiveTintColor: sementic.Primary.Normal,
                tabBarStyle: {
                    backgroundColor: sementic.Fill.Assistive,
                },
            }}
        >
            <Tabs.Screen
                name="main/screen"
                options={{
                    tabBarIcon: ({ color }) => <MainIcon fill={color} />,
                }}
            />
            <Tabs.Screen
                name="chat/screen"
                options={{
                    tabBarIcon: ({ color }) => <ChatIcon width={24} height={24} fill={color} />,
                }}
            />
            <Tabs.Screen
                name="triage/screen"
                options={{
                    tabBarIcon: ({ color }) => <TriageIcon width={24} height={24} fill={color} />,
                }}
            />
            <Tabs.Screen
                name="profile/screen"
                options={{
                    tabBarIcon: ({ color }) => <ProfileIcon width={24} height={24} fill={color} />,
                }}
            />
        </Tabs>
    );
}
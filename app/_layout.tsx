import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function RootLayout() {
    const [loaded] = useFonts({
        'Bold': require('../assets/fonts/Pretendard-Bold.ttf'),
        'Medium': require('../assets/fonts/Pretendard-Medium.ttf'),
        'Regular': require('../assets/fonts/Pretendard-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(tabs)"/>
                <Stack.Screen name="(auth)" />
            </Stack>
            <StatusBar style="auto" />
        </QueryClientProvider>
    );
}
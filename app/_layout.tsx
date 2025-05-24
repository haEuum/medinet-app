import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import {StatusBar} from 'expo-status-bar';
import 'react-native-reanimated';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import EStyleSheet from 'react-native-extended-stylesheet';
import { EStyleConfig } from 'src/styles/build';

const queryClient = new QueryClient();

EStyleSheet.build(EStyleConfig);

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
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
            <StatusBar style="auto" />
        </QueryClientProvider>
    );
}
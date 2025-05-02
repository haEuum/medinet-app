import { createNavigationContainerRef } from '@react-navigation/native';
import {RootStackParamList} from "src/types/navigation/root/root.navigation";

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export function navigate<RouteName extends keyof RootStackParamList>(
    ...args: undefined extends RootStackParamList[RouteName]
        ? [name: RouteName, params?: RootStackParamList[RouteName]]
        : [name: RouteName, params: RootStackParamList[RouteName]]
) {
    if (navigationRef.isReady()) {
        navigationRef.navigate(...(args as [any, any]));
    }
}
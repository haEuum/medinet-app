import { createNavigationContainerRef } from "@react-navigation/native";
import {NavigationType} from "src/types/navigation/navigation.type";

export const navigationRef = createNavigationContainerRef<NavigationType>();

export function navigate<T extends keyof NavigationType>(name: T, params?: NavigationType[T]) {
    if (navigationRef.isReady()) {
        (navigationRef.navigate as any)(name, params);
    }
}
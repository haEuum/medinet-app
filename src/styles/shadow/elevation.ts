import { Platform, ViewStyle } from 'react-native';

export type ElevationLevel = 1 | 2 | 3;

const iOSShadows: Record<ElevationLevel, ViewStyle> = {
    1: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.08,
        shadowRadius: 10,
    },
    2: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.06,
        shadowRadius: 20,
    },
    3: {
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.04,
        shadowRadius: 32,
    },
};

const androidElevations: Record<ElevationLevel, ViewStyle> = {
    1: { elevation: 1 },
    2: { elevation: 2 },
    3: { elevation: 3 },
};

export function elevation(level: ElevationLevel): ViewStyle {
    return Platform.OS === 'ios' ? iOSShadows[level] : androidElevations[level];
}
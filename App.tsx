import React from 'react';
import "src/styles/build";
import Provider from 'src/components/common/provider';
import type { Props } from 'src/components/common/provider/type';
import RootNavigator from "src/navigation/root";

const App = ({ children }: Props) => {
    return (
        <Provider>
            <RootNavigator />
        </Provider>
    );
};

export default App;
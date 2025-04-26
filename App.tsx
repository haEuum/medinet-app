import React from 'react';
import Provider from 'src/components/common/provider';
import type { Props } from 'src/components/common/provider/type';

const App = ({ children }: Props) => {
    return (
        <Provider>
            {children}
        </Provider>
    );
};

export default App;
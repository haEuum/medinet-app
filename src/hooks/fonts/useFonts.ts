import { useState, useEffect } from 'react';

const useFonts = () => {
    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        setFontsLoaded(true);
    }, []);

    return fontsLoaded;
};

export default useFonts;

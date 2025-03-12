import Provider from "./src/components/common/provider/provider";
import AppNavigator from "./src/navigation/AppNavigator";

const App = () => {
    return(
        <Provider>
            <AppNavigator />
        </Provider>
    );
};

export default App;
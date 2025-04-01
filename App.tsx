import Provider from "src/components/common/provider/provider";
import AppNavigator from "src/navigation/AppNavigator";
import Toast from "react-native-toast-message";

export default function App() {
  return (
    <Provider>
      <AppNavigator />
      <Toast />
    </Provider>
  );
}


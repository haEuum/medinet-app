import Provider from "src/components/common/provider/provider";
import AppNavigator from "src/navigation/AppNavigator";

export default function App() {
  return (
      <Provider>
          <AppNavigator />
      </Provider>
  );
}


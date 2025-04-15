import React from "react";
import Provider from "src/components/common/provider";
import RootNavigator from "src/navigation/root";

const App = () => {
  return (
      <Provider>
        <RootNavigator />
      </Provider>
  )
}

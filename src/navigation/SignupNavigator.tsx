import { createStackNavigator } from "@react-navigation/stack";
import { SignupStackParamList } from "src/types/signup/signup.type";
import Step1 from "src/components/step/step1";
import Step2 from "src/components/step/step2";
import Step3 from "src/components/step/step3";
import Step4 from "src/components/step/step4";
import Step5 from "src/components/step/step5";
import Step6 from "src/components/step/step6";

const SignupStack = createStackNavigator<SignupStackParamList>();

const SignupNavigator = () => {
  return (
    <SignupStack.Navigator screenOptions={{ headerShown: false }}>
      <SignupStack.Screen name="Step1" component={Step1} />
      <SignupStack.Screen name="Step2" component={Step2} />
      <SignupStack.Screen name="Step3" component={Step3} />
      <SignupStack.Screen name="Step4" component={Step4} />
      <SignupStack.Screen name="Step5" component={Step5} />
      <SignupStack.Screen name="Step6" component={Step6} />
    </SignupStack.Navigator>
  );
};

export default SignupNavigator;

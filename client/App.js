import { StatusBar } from "expo-status-bar";
import RootNavigator from "./src/navigation";
import { NavigationContainer } from "@react-navigation/native";
import { Amplify } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react-native";
import config from "./src/aws-exports";

Amplify.configure(config);

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
      <StatusBar style="dark" />
    </NavigationContainer>
  );
}

export default withAuthenticator(App);

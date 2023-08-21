import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./rootStack";
import UserStack from "./userStack";

export default function Navigation() {
  return (
    <NavigationContainer>
      <RootNavigator />
      {/* <UserStack /> */}
    </NavigationContainer>
  );
}

//import UserNavigator from "./userStack";

{
  /* <NavigationContainer>
<UserNavigator />
</NavigationContainer> */
}

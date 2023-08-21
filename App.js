import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import LandingScreen from "./screens/LandingScreen";
import CreateAccountScreen from "./screens/CreateAccountScreen";
import LogIn from "./screens/LogIn";
import AuthenticationScreen from "./screens/AuthenticationScreen";

import AddFarm from "./screens/AddFarm";
import Security from "./screens/Security";
import Settings from "./screens/Settings";
import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <SafeAreaProvider>
      <UserProvider>
        <Navigation />
      </UserProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

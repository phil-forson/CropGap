import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Security from "../screens/Security";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import SettingsScreen from "../screens/Theme";
import Theme from "../screens/Theme";
import Settings from "../screens/Settings";
import { Ionicons } from "@expo/vector-icons";
import { Image, Text } from "react-native";

const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();

const SettingsStack = createNativeStackNavigator();

const SearchStack = createNativeStackNavigator();
const HistoryStack = createNativeStackNavigator();

function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}
const Tab = createBottomTabNavigator();

export default function UserStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <>
              <Image source={require("../assets/Images/Theme.svg")} />
            </>
          ),
        }}
      >
        {() => (
          <HomeStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <HomeStack.Screen name="Root" component={SettingsScreen} />
            {/* <HomeStack.Screen name="CompanyName" component={ProfileScreen} />
              <HomeStack.Screen name="AddtoCart" component={AddToCart} /> */}
          </HomeStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Search"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={"search"} color={color} />
          ),
        }}
      >
        {() => (
          <SearchStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <SearchStack.Screen name="yh" component={SettingsScreen} />
          </SearchStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="History"
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={"search"} color={color} />
          ),
        }}
      >
        {() => (
          <HistoryStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <HistoryStack.Screen name="vggjb" component={Security} />
            <HistoryStack.Screen name="kp" component={Theme} />
          </HistoryStack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen name="Settings">
        {() => (
          <SettingsStack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <SettingsStack.Screen name="yutfuvg" component={Settings} />
            <SettingsStack.Screen name="Security" component={Security} />
            <SettingsStack.Screen name="Theme" component={Theme} />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

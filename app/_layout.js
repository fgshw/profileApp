import { Stack } from "expo-router";
import ThemeToggle from "./component/ThemeToggle";
import { ThemeProvider, useTheme } from "./context/ThemeContext";
import { StatusBar } from "react-native";

function StackLayout() {
  const { isDarkMode, toggleTheme, color } = useTheme();
  return (
    <>
      // StatusBar มันกลายเป็นสีดำหลังใช้งาน ToggleTheme
      <StatusBar barStyle={isDarkMode ? "light-content" : "dark-content"} />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: color.background,
          },
          headerTintColor: color.text,
          headerTitleStyle: {
            color: color.text,
          },
        }}
      >
        <Stack.Screen
          name="index"
          options={{ title: "Profile", headerRight: () => <ThemeToggle /> }}
        />
        <Stack.Screen
          name="about"
          options={{
            title: "About subject",
            headerRight: () => <ThemeToggle />,
          }}
        />
      </Stack>
    </>
  );
}

export default function Layout() {
  return (
    <ThemeProvider>
      <StackLayout />
    </ThemeProvider>
  );
}

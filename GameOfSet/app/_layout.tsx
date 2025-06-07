import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [fontsLoaded, error] = useFonts({
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null; // or a loading indicator
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Game of Set",
          headerStyle: {
            backgroundColor: "#0F172A",
          },
          headerTitleAlign: "center",
          headerShadowVisible: true,
          headerTintColor: "#6366F1",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Stack>
  );
}

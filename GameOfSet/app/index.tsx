import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ScrollView, Text, View } from "react-native";
import '@/global.css'
import { SafeAreaView } from "react-native-safe-area-context";
import CustomButton from "@/components/CustomButton";


// make use state that can be true or false
import { useState } from "react";


export default function App() {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <SafeAreaView className="bg-background h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full items-center justify-center px-4">
          <Text className="text-2xl text-primary font-semibold">Dixon Says Hi</Text>
          <StatusBar style="auto" />
          <Link href="/set-game" style={{ color: 'blue' }}>Go To Game</Link>
          <CustomButton title="Click Me!" handlePress={() => setIsToggled(!isToggled)} containerStyles="w-full mt-7"/>
          <Text className="text-lg text-primary mt-4">
            {isToggled ? "Button is ON" : "Button is OFF"}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

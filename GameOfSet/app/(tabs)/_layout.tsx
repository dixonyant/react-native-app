import React from 'react';
import { Tabs } from 'expo-router';


const TabsLayout = () => {
  return (
    <>
      <Tabs screenOptions={{ tabBarShowLabel: false }}>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Hose',
            headerShown: false,
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout;
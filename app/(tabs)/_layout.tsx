import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons' // Popular icons

const color1 = 'black';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'yellow',
        headerStyle: {
          backgroundColor: 'black',
        },
        headerShadowVisible: false,
        headerTintColor: 'white',
        tabBarStyle: {
          backgroundColor: color1,
        },
      }}
    >
      <Tabs.Screen name="index" options={{ 
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        ),
      }} />
      <Tabs.Screen name="about" options={{ 
        title: 'About',
        tabBarIcon: ({ color, focused }) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24} />
        ),
      }} />
    </Tabs>
  );
}

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack> //* How does (tabs) -> (tabs dir) function?
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}

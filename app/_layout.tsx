import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style='light' backgroundColor='rgb(66, 8, 133)' />
      <Stack>
        <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
        <Stack.Screen
          name='manageExpenses'
          options={{
            presentation: 'modal',
            headerStyle: { backgroundColor: 'rgb(66, 8, 133)' },
            headerTintColor: 'white',
            title: 'Manage Expense',
          }}
        />
      </Stack>
    </>
  );
}

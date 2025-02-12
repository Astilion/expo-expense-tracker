import { Text, View } from 'react-native';
import TotalExpenses from '@/app-example/components/TotalExpenses';

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        padding: 14,
        alignItems: 'center',
        backgroundColor: 'rgb(60, 17, 109)',
      }}
    >
      <TotalExpenses />
    </View>
  );
}

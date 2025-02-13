import { Text, View } from 'react-native';
import TotalExpenses from '@/components/TotalExpenses';
import Expense from '@/components/Expense';

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
      <Expense/>
    </View>
  );
}

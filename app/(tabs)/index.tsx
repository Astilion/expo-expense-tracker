import { View } from 'react-native';
import { ExpenseOutput } from '@/components/ExpensesOutput';

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
      <ExpenseOutput />
    </View>
  );
}

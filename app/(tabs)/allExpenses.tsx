import { ExpensesContext } from '@/store/expenses-context';
import { useContext } from 'react';
import { ExpenseOutput } from '@/components/ExpensesOutput';
import { View } from 'react-native';

export default function AppExpenses() {
  const expensesCtx = useContext(ExpensesContext);
  return (
    <View
      style={{
        flex: 1,
        padding: 14,
        alignItems: 'center',
        backgroundColor: 'rgb(60, 17, 109)',
      }}
    >
      <ExpenseOutput expenses={expensesCtx.expenses} />
    </View>
  );
}

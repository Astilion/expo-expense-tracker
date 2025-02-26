import { View } from 'react-native';
import { ExpensesContext } from '@/store/expenses-context';
import { ExpenseOutput } from '@/components/ExpensesOutput';
import { useContext } from 'react';
import { getDateMinusDays } from '@/util/date';

export default function Index() {
  const expensesCtx = useContext(ExpensesContext);
  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date > date7DaysAgo;
  });
  return (
    <View
      style={{
        flex: 1,
        padding: 14,
        alignItems: 'center',
        backgroundColor: 'rgb(60, 17, 109)',
      }}
    >
      <ExpenseOutput expenses={recentExpenses} />
    </View>
  );
}

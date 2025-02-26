import { Text, View, StyleSheet } from 'react-native';
import { Expense } from '@/types/types';

interface TotalExpensesProps {
  expenses: Expense[];
}
export default function TotalExpenses({ expenses }: TotalExpensesProps) {
  const expensesSum = expenses && expenses.length > 0
    ? expenses.reduce((sum, expense) => {
        return sum + expense.amount;
      }, 0)
    : 0;
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.ammountText}>${expensesSum.toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(184, 184, 184)',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalText: {
    color: 'rgb(52, 8, 104)',
    fontSize: 17,
  },
  ammountText: {
    color: 'rgb(99, 23, 134)',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

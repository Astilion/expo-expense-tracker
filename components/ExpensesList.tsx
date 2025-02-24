import { FlatList } from 'react-native';
import { Expense } from '@/types/types';
import ExpenseItem from './ExpenseItem';
import { useRouter } from 'expo-router';

interface ExpensesListProps {
  expenses: Expense[];
}

export default function ExpensesList({ expenses }: ExpensesListProps) {
  const router = useRouter();
  function handlePressItem(id: string) {
    router.push({
      pathname: '/manageExpenses',
      params: { expenseId: id },
    });
  }

  function renderExpenseItem({ item }: { item: Expense }) {
    return <ExpenseItem expense={item} onPress={handlePressItem} />;
  }
  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

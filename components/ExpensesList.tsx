import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { Expense } from '@/types/types';

interface ExpensesListProps {
  expenses: Expense[];
}
export default function ExpensesList({ expenses }: ExpensesListProps) {
  function renderExpenseItem(itemData: ListRenderItemInfo<Expense>) {
    const date = itemData.item.date;
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

    return (
      <View style={styles.rootContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.expenseName}>{itemData.item.title}</Text>
          <Text style={styles.expenseDate}>{formattedDate}</Text>
        </View>
        <View style={styles.ammountContainer}>
          <Text style={styles.price}>${itemData.item.amount.toFixed(2)}</Text>
        </View>
      </View>
    );
  }

  return (
    <FlatList
      data={expenses}
      renderItem={renderExpenseItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    backgroundColor: 'rgb(79, 24, 143)',
    borderRadius: 8,
    padding: 12,
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  textContainer: {},
  expenseName: {
    color: 'white',
    fontWeight: 'bold',
  },
  expenseDate: {
    color: 'white',
  },
  ammountContainer: {
    backgroundColor: 'rgb(214, 214, 214)',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
  },
  price: {
    color: 'rgb(102, 22, 194)',
    fontWeight: 'bold',
    fontSize: 17,
  },
});

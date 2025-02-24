import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Expense } from '@/types/types';

interface ExpenseItemProps {
  expense: Expense;
  onPress: (id: string) => void;
}

export default function ExpenseItem({ expense, onPress }: ExpenseItemProps) {
  const date = expense.date;
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

  return (
    <Pressable
      onPress={() => onPress(expense.id)}
      style={({ pressed }) => [styles.rootContainer, pressed && styles.pressed]}
      android_ripple={{ color: 'rgb(120, 80, 170)' }}
    >
      <View style={styles.textContainer}>
        <Text style={styles.expenseName}>{expense.title}</Text>
        <Text style={styles.expenseDate}>{formattedDate}</Text>
      </View>
      <View style={styles.ammountContainer}>
        <Text style={styles.price}>${expense.amount.toFixed(2)}</Text>
      </View>
    </Pressable>
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
  pressed: {
    opacity: 0.75,
    backgroundColor: 'rgb(95, 40, 160)',
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

import { Text, View, StyleSheet } from 'react-native';

export default function Expense() {
  //dummy expense
  const expense = {
    title: 'A book',
    amount: 19.99,
    date: new Date('2024-02-13'),
  };
  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.expenseName}>{expense.title}</Text>
          <Text style={styles.expenseDate}>
            {expense.date.toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </Text>
        </View>
        <View style={styles.ammountContainer}>
          <Text style={styles.price}>{expense.amount.toFixed(2)}</Text>
        </View>
      </View>
    </>
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
  price: { color: 'rgb(102, 22, 194)', fontWeight: 'bold', fontSize: 17 },
});

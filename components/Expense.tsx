import { Text, View, StyleSheet } from 'react-native';

export default function Expense() {
  return (
    <>
      <View style={styles.rootContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.expenseName}>A book</Text>
          <Text style={styles.expenseDate}>2025.02.12</Text>
        </View>
        <View style={styles.ammountContainer}>
          <Text style={styles.price}>19.99</Text>
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

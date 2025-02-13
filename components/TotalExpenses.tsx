import { Text, View, StyleSheet } from 'react-native';

export default function TotalExpenses() {
  return (
    <View style={styles.container}>
      <Text style={styles.totalText}>Total:</Text>
      <Text style={styles.ammountText}>$240.54</Text>
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

import { View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useContext } from 'react';
import { ExpensesContext } from '@/store/expenses-context';
export default function ManageExpenses() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const expenseCtx = useContext(ExpensesContext);

  const expenseId = params.expenseId as string;
  const isEditing = !!params.expenseId;

  function cancelHandler() {
    router.back();
  }

  function confirmHandler() {
    if (isEditing) {
      expenseCtx.updateExpense(expenseId, {
        title: 'test',
        amount: 19.99,
        date: new Date('2022-05-19'),
      });
    } else {
      expenseCtx.addExpense({
        title: 'test',
        amount: 19.99,
        date: new Date('2022-05-19'),
      });
    }
    router.back();
  }

  function deleteExpenseHandler() {
    expenseCtx.deleteExpense(expenseId);
    router.back();
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Amount'
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
          keyboardType='decimal-pad'
        />
        <TextInput
          style={styles.input}
          placeholder='Description'
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
          multiline
        />
        <TextInput
          style={styles.input}
          placeholder='Date'
          placeholderTextColor='rgba(255, 255, 255, 0.7)'
        />
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={cancelHandler}
              color='rgb(184, 184, 184)'
            />
          </View>
          <View style={styles.button}>
            <Button
              title={isEditing ? 'Update' : 'Add'}
              onPress={confirmHandler}
              color='rgb(184, 184, 184)'
            />
          </View>
        </View>
        {isEditing && (
          <View style={styles.deleteContainer}>
            <Button
              title='Delete'
              onPress={deleteExpenseHandler}
              color='#ef4444'
            />
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'rgb(60, 17, 109)',
  },
  form: {
    flex: 1,
  },
  input: {
    backgroundColor: 'rgb(66, 8, 133)',
    color: 'white',
    padding: 12,
    borderRadius: 6,
    fontSize: 16,
    marginVertical: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: 'rgb(66, 8, 133)',
    alignItems: 'center',
  },
});

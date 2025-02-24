import ExpensesList from './ExpensesList';
import TotalExpenses from './TotalExpenses';

export const ExpenseOutput = () => {
  const DUMMY_EXPENSES = [
    {
      id: 'e1',
      title: 'A book',
      amount: 19.99,
      date: new Date('2024-02-13'),
    },
    {
      id: 'e2',
      title: 'A bike',
      amount: 59.99,
      date: new Date('2024-02-17'),
    },
    {
      id: 'e3',
      title: 'A knife',
      amount: 29.99,
      date: new Date('2024-02-21'),
    },
    {
      id: 'e4',
      title: 'A banana',
      amount: 49.99,
      date: new Date('2021-02-28'),
    },
    {
      id: 'e5',
      title: 'A book',
      amount: 49.99,
      date: new Date('2021-02-28'),
    },
  ];
  return (
    <>
      <TotalExpenses expenses={DUMMY_EXPENSES} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </>
  );
};

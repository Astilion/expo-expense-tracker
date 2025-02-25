import { createContext, useReducer, useState, ReactNode } from 'react';
import { Expense } from '@/types/types';

type ExpensesContextProviderProps = {
  children: ReactNode;
};
type ExpensesContextType = {
  expenses: Expense[];
  addExpense: (expenseData: {
    title: string;
    amount: number;
    date: Date;
  }) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (
    id: string,
    expenseData: { title: string; amount: number; date: Date },
  ) => void;
};

export const ExpensesContext = createContext<ExpensesContextType>({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});
type ExpensesAction =
  | { type: 'ADD'; payload: { title: string; amount: number; date: Date } }
  | { type: 'DELETE'; payload: string }
  | {
      type: 'UPDATE';
      payload: {
        id: string;
        data: { title: string; amount: number; date: Date };
      };
    };

function expensesReducer(state: Expense[], action: ExpensesAction): Expense[] {
  switch (action.type) {
    case 'ADD':
    case 'UPDATE':
    case 'DELETE':
    default:
      return state;
  }
}
export default function ExpensesContextProvider({
  children,
}: ExpensesContextProviderProps) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);
  function addExpense(expenseData: {
    title: string;
    amount: number;
    date: Date;
  }) {
    dispatch({ type: 'ADD', payload: expenseData });
  }
  function deleteExpense(id: string) {
    dispatch({ type: 'DELETE', payload: id });
  }
  function updateExpense(
    id: string,
    expenseData: {
      title: string;
      amount: number;
      date: Date;
    },
  ) {
    dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
  }

  const value: ExpensesContextType = {
    expenses: expensesState,
    addExpense,
    deleteExpense,
    updateExpense,
  };
  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

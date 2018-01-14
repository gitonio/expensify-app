import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expense by id if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const newexpense = {
        id: '4',
        description: 'Laptop',
        note:'',
        amount: 195,
        createdAt: 0    
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newexpense
    }
    const newexpenses = [
        ...expenses,
        newexpense
    ]
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(newexpenses)
})

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            description: 'Gums'
        }
    }
    const state = expensesReducer(expenses, action)
    expect(state[0].description).toBe('Gums')
})

test('should not edit an expense if not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: 10,
        updates: {
            description: 'Gums'
        }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expense', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})
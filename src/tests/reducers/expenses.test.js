import expenesesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expenesesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[1].id
    };
    const state = expenesesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '-1'
    };
    const state = expenesesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const expense = {
        id: '4', 
        description: 'wine', 
        note: '', 
        amount: 123, 
        createAt: 1000
    };
    const action = {
        type: 'ADD_EXPENSE', 
        expense
    };
    const state = expenesesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE', 
        id: expenses[0].id, 
        updates: {
            note: 'changed'
        }
    };
    const state = expenesesReducer(expenses, action);
    expect(state).toEqual([{
        ...expenses[0], 
        note: 'changed'
    }, expenses[1], expenses[2]]);
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE', 
        id: '10', 
        updates: {
            note: 'changed'
        }
    };
    const state = expenesesReducer(expenses, action);
    expect(state).toEqual(expenses);
})
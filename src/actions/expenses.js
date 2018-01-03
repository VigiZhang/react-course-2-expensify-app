import uuid from 'uuid';

// AddExpense
export const addExpense = ({
    description = '', 
    note = '', 
    amount = 0, 
    createAt = 0
} = {}) => ({
    type: 'ADD_EXPENSE', 
    expense: {
        id: uuid(), 
        description, 
        note, 
        amount, 
        createAt
    }
});

// RemoveExpense
export const removeExpense = ({
    id = 0
} = {}) => ({
    type: 'REMOVE_EXPENSE', 
    id
});

// EditExpense

export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE', 
    id, 
    updates
});
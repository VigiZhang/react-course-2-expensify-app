// SetTextFilter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT', 
    text
});

// SortByAmount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SortByDate
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SetStartDate
export const setStartDate = (startDate = undefined) => ({
    type: 'SET_START_DATE', 
    startDate
});

// SetEndDate
export const setEndDate = (endDate = undefined) => ({
    type: 'SET_END_DATE', 
    endDate
});
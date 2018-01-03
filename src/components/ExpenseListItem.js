import React from 'react';
import { Link } from 'react-router-dom';

export const ExpenseListItem = ({ id, description, amount, createAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>{amount} - {createAt}</p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

// export default connect()(ExpenseListItem);
export default ExpenseListItem;
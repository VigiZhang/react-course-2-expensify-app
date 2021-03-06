import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

export const ExpenseListItem = ({ id, description, amount, createAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <p>
            {numeral(amount).format('$0,0.00')} 
            - 
            {moment(createAt).format('MMMM Do, YYYY')}
        </p>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses
    };
};

// export default connect()(ExpenseListItem);
export default ExpenseListItem;
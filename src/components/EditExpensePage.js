import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

// const EditExpensePage = (props) => (
//     <div>
//         This is from my edit page {props.match.params.id}
//     </div>
// );

// const EditExpensePage = (props) => {
//     return (
//     <div>
//         <ExpenseForm expense={props.expense}
//         onSubmit={(expense) => {
//             props.dispatch(editExpense(props.expense.id, expense));
//             props.history.push('/')
//         }}
//         />
//         <button onClick={()=> {
//             props.dispatch(removeExpense({ id: props.expense.id }));
//             props.history.push('/')
//         }}>Remove</button>
//         </div>
//     )
// };

export class EditExpensePage extends React.Component {

    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/')

    }
    onRemove  = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id})
        this.props.history.push('/')

    }
    render() {
        return (
            <div>
                <ExpenseForm expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onRemove}>
                Remove</button>
            </div>
        )
    }
}
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: ({id}) => dispatch(startRemoveExpense({ id }))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
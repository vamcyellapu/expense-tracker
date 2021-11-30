import ExpenseItem from './ExpenseItem';
import './Expense.css';
import Card from '../UI/Card';

function Expenses(props) {
  const expenses = props.expenses;

  return (
    <Card className="expenses">
      {expenses.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;

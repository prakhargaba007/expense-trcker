import './ExpenseDate.css';
function ExpenseDate(Props) {
    let month = Props.date.toLocaleString('en-US', { month: 'long' });
    let day = Props.date.toLocaleString('en-US', { day: '2-digit' });
    let year = Props.date.getFullYear();
    // console.log(month);
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;
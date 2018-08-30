

export default (expenses) => {
    var initialValue = 0;
    if (expenses) {
        return expenses.reduce((acc, expense) => acc + expense.amount
    , initialValue);
    }
    else {
        return initialValue;
    }
}


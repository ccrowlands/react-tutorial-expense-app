import expenses from "../fixtures/expenses";
import getExpensesTotal from "../../selectors/expenses-total";

test("should add up expenses", () => {
    const result = getExpensesTotal(expenses);
    expect(result).toEqual(113495);
})

test("should return 0 if no expenses", () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
})

test("should return single expense", () => {
    const id = 1;
    const singleExpense = expenses.filter((expense) => expense.id === id);
    const result = getExpensesTotal(singleExpense); 
    expect(result).toBe(expenses[id-1].amount);
})
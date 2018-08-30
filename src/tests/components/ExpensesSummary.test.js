import React from "react";
import {shallow} from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";

test("should render expenses summary with one expense", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={235} />)
    expect(wrapper).toMatchSnapshot();
});

test("should render expenses summary with multiple expenses", () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={668863} />)
    expect(wrapper).toMatchSnapshot();
});
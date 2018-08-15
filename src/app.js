import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

store.dispatch(addExpense({description: "Water bill", amount: 100, createdAt: -21000 }));
store.dispatch(addExpense({description: "Gas bill", amount: 60, createdAt: 30000 }));
store.dispatch(addExpense({description: "Rent", amount: 195, createdAt: 100 }));


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
) 

ReactDOM.render(jsx, document.getElementById("app"));


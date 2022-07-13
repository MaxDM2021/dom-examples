import transactions from "./data/transactions.js";
import transactionsHistory from "./data/transactions.js";



const makeTransactionTableRowMarkup = ({id, amount, date, business, type, name, account}) => {
    
    return `
    <tr>
        <td>${id}</th>
        <td>${amount}</th>
        <td>${date}</th>
        <td>${business}</th>
        <td>${type}</th>
        <td>${name}</th>
        <td>${account}</th>
</tr>
`;
}

console.log(transactionsHistory);
const tableEl = document.querySelector('.js-transaction-table');

const makeTransactionTableRows = transactionsHistory
.map(makeTransactionTableRowMarkup)
.join('');

tableEl.insertAdjacentHTML('beforeend', makeTransactionTableRows);

console.log(makeTransactionTableRows);

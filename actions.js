import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://realtime-database-ae212-default-rtdb.firebaseio.com/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const budgetListInDB = ref(database, "budgetList")
const budget = {
    name: " ",
    salary: 1000,
    expense: [],
    expenseTypes: [],
    sum: 0,
    moneyLeft: 0,

}

// const typeSelectionEl = document.getElementById("selectType")
const expenseTypeEl = document.getElementById("expense-type")
const inputAmountEl = document.getElementById("input-amount")

const addExpenseBtnEl = document.getElementById("add-expense")

const expensesListEl = document.getElementById("expenses")
const salaryListEl = document.getElementById("salary")
const totalSumEl = document.getElementById("total-sum")
const totalExpenseEl = document.getElementById("expense-amt")



addExpenseBtnEl.addEventListener("click", function() {
    const expenseType = expenseTypeEl.value;
    const expenseAmount = Number(inputAmountEl.value)
    
    budget.expense.push(expenseAmount)
    budget.expenseTypes.push(expenseType)
    renderBudget()

    // push(budgetListInDB, inputTypeValue, inputTypeAmount)
    
})


function renderBudget(){
    let listItems = ""
    for (let i = 0; i < budget.expense.length; i++) {
        listItems += 
        `<li> ${budget.expenseTypes[i]} - $${budget.expense[i]} </li>
        <hr />
        `
        // addExpense()
        // calculateSum()
    }

    
    expensesListEl.innerHTML = `${listItems}`
    calculateSum()
    calculateExpense()
    clearField()
}


function calculateSum() {
        const sum = budget.expense.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        budget.sum = sum
        totalSumEl.innerHTML = budget.sum
}



function calculateExpense() {
    totalExpenseEl.innerHTML = "$" + (budget.salary - budget.sum)
}

    
function clearField() {
        document.getElementById("expense-type").value = " "
        document.getElementById("input-amount").value = "$0"
}
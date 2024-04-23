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
    salary: 3000,
    expense: [],
    expenseTypeU: [],
    expenseTypes: ["Rent" , "Transportation", "Food", "Utilities", "Entertainment", "Misc", "Other"],
    sum: 0,
    moneyLeft: 0,

}

const typeSelectionEl = document.getElementById("selectType")
const inputAmountEl = document.getElementById("input-amount")
const addExpenseBtnEl = document.getElementById("add-expense")
const expensesListEl = document.getElementById("expenses")
const salaryListEl = document.getElementById("salary")
const totalSumEl = document.getElementById("total-sum")
const totalExpenseEl = document.getElementById("expense-amt")

for (let i = 0; i < budget.expenseTypes.length; i++) {
    let option = document.createElement("option")
    option.value = budget.expenseTypes[i]
    option.text = budget.expenseTypes[i]
    typeSelectionEl.appendChild(option)
  }

// push(budgetListInDB, inputTypeValue, inputTypeAmount)
addExpenseBtnEl.addEventListener("click", function() {
    const expenseType = typeSelectionEl.value
    const expenseAmount = Number(inputAmountEl.value)

    budget.expense.push(expenseAmount)
    budget.expenseTypeU.push(expenseType) 
    renderBudget()
});

function renderBudget() {
    let listItems = "" 
    for (let i = 0; i < budget.expense.length; i++) {
        listItems += `<li>${budget.expenseTypeU[i]} - $${budget.expense[i]}</li><hr />` 
    }
    expensesListEl.innerHTML = listItems 

    calculateSum()
    calculateExpense()
    clearField()
}


function calculateSum() {
        const sum = budget.expense.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
        budget.sum = sum
        totalSumEl.innerHTML = `$${budget.sum}`
}



function calculateExpense() {
    totalExpenseEl.innerHTML = "$" + (budget.salary - budget.sum)
}

    
function clearField() {
    document.getElementById("selectType").value = ""
    document.getElementById("input-amount").value = "$0"

}
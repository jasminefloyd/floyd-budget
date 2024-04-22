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
    
    budget.expense.push(inputAmountEl.value)
    budget.expenseTypes.push(expenseTypeEl.value)
    renderBudget()
    calculateExpense()
    clearField()
    // push(budgetListInDB, inputTypeValue, inputTypeAmount)
    
})


function renderBudget(){
    let listItems = ""
    for (let i = 0; i < budget.expense.length; i++) {
        listItems += 
        `<li> ${budget.expenseTypes[i]} - $${budget.expense[i]} </li>`
        // addExpense()
        // calculateSum()
    }
    
    expensesListEl.innerHTML = `${listItems}`

}

function addExpenseFlow(){
    let listItems = ""
    for (let i = 0; i < budget.expense.length; i++) {
        listItems += 
        `<li> ${budget.expenseTypes[i]} - $${budget.expense[i]} </li>`
        // addExpense()
        calculateSum()
    }
    
    expensesListEl.innerHTML = `${listItems}`

}


function calculateSum() {
    // for (let i = 0; i < budget.expense.length; i++) {
    //     budget.sum += budget.expense[i + 1]
    //     totalSumEl.innerHTML = budget.sum
    // }
    totalSumEl.innerHTML = `100`
   
}

function calculateExpense() {
    totalExpenseEl.innerHTML = "$" + (budget.salary - budget.sum)
}

    
function clearField() {
        document.getElementById("expense-type").value = " "
        document.getElementById("input-amount").value = "$0"
}





    function addExpense(){
        budget.expense.push(inputAmountEl.value)
        budget.expenseTypes.push(inputTypeEl.value)
        budget.sum += inputAmountEl.value
 
    }
    


// for(var i = 0; i < budget.expenseTypes.length; i++) {
//     var opt = budget.expenseTypes[i]
//     var el = document.createElement("option");
//     el.textContent = opt
//     typeSelectionEl.value = opt
//     typeSelectionEl.appendChild(el)
// }





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
    salary: [],
    expense: [],
    expenseTypes: [],
    sum: 0,
    moneyLeft: 0,

}

// const typeSelectionEl = document.getElementById("selectType")
const expenseTypeEl = document.getElementById("expense-type")
const totalSumEl = document.getElementById("total-sum")
const totalExpenseEl = document.getElementById("expense-amt")
const inputAmountEl = document.getElementById("input-amount")
const addExpenseBtnEl = document.getElementById("add-expense")
const expensesListEl = document.getElementById("expenses")



addExpenseBtnEl.addEventListener("click", function() {
    budget.expense.push(inputAmountEl.value)
    budget.expenseTypes.push(expenseTypeEl.value)

    renderBudget()
    clearField()
    
    // push(budgetListInDB, inputTypeValue, inputTypeAmount)
    
})





    
function clearField() {
        document.getElementById("input-type").value = " "
        document.getElementById("input-amount").value = "$0"
}













    function renderBudget(){
        let listItems = ""
        for (let i = 0; i < budget.expense.length; i++) {
            listItems += 
            `<li> ${budget.expenseTypes[i]} - $${budget.expense[i]} </li>`
            // addExpense()
        }
        expensesListEl.innerHTML = `${listItems}`
        renderSum()
        totalExpenseEl.innerHTML = `50`
    }

    function renderSum() {
        let sum = 0
        sum += budget.expense[i]
        budget.sum = sum
        totalSumEl.innerHTML = budget.sum
    }




    function addExpense(){
        budget.expense.push(inputAmountEl.value)
        budget.expenseTypes.push(inputTypeEl.value)
        budget.sum += inputAmountEl.value
 
    }
    


for(var i = 0; i < budget.expenseTypes.length; i++) {
    var opt = budget.expenseTypes[i]
    var el = document.createElement("option");
    el.textContent = opt
    typeSelectionEl.value = opt
    typeSelectionEl.appendChild(el)
}





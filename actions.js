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

const totalSumEl = document.getElementById("total-sum")
const totalExpenseEl = document.getElementById("expense-amt")
const inputTypeEl = document.getElementById("input-type")
const inputAmountEl = document.getElementById("input-amount")
const addExpenseBtnEl = document.getElementById("add-expense")
const expensesListEl = document.getElementById("expenses")



addExpenseBtnEl.addEventListener("click", function() {
    budget.expense.push(inputAmountEl.value)
    budget.expenseTypes.push(inputTypeEl.value)

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
        budget.sum = 0
        for (let i = 0; i < budget.expense.length; i++) {
            listItems += 
            `<li>${budget.expenseTypes[i]} - $${budget.expense[i]} </li>`
            // renderSum()
            // addExpense()
        }
        
        expensesListEl.innerHTML = `${listItems}`
        totalSumEl.innerHTML = `50`
        totalExpenseEl.innerHTML = `50`
    }

    function renderSum() {
        budget.sum = budget.expense[0].value + budget.expense[1].value
    }




    function addExpense(){
        budget.expense.push(inputAmountEl.value)
        budget.expenseTypes.push(inputTypeEl.value)
        budget.sum += inputAmountEl.value
 
    }
    

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
    salary: ["1000", "500"],
    expense: [],
    expenseTypeU: [],
    expenseTypes: ["Rent" , "Transportation", "Food", "Utilities", "Entertainment", "Misc", "Other"],
    sum: 0,
    salarySum: 0,
    moneyLeft: 0,

}

const typeSelectionEl = document.getElementById("selectType")
const incomeInputEl = document.getElementById("income-type")
const incomeAmountEl = document.getElementById("income-input-amount")
const inputAmountEl = document.getElementById("input-amount")
const addExpenseBtnEl = document.getElementById("add-expense")
const addIncomeBtnEl = document.getElementById("add-income")
const expensesListEl = document.getElementById("expenses")
const salaryListEl = document.getElementById("salary")
const totalSumEl = document.getElementById("total-sum")
const totalExpenseEl = document.getElementById("expense-amt")
const tabLinks = document.querySelectorAll(".tab-link")
const tabContents = document.querySelectorAll(".tab-content")

tabLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      // Deactivate all tabs
      tabLinks.forEach((link) => link.classList.remove("active"))
      tabContents.forEach((content) => content.classList.remove("active"))
  
      // Activate the clicked tab
      const tab = event.currentTarget.dataset.tab
      event.currentTarget.classList.add("active")
      document.getElementById(tab).classList.add("active")
    })
  })

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
})

addIncomeBtnEl.addEventListener("click", function() {
    const incomeAmount = Number(incomeAmountEl.value)
    budget.salary.push(incomeAmount)
    calculateExpense()
})




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
    // const sum = budget.salary.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    // budget.salarySum = sum
    totalExpenseEl.innerHTML = `$${budget.salarySum}`


}

    
function clearField() {
    document.getElementById("selectType").value = ""
    document.getElementById("input-amount").value = "$0"

}






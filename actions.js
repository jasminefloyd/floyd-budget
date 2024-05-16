//Objects
const budget = {
    id: 0,
    name: "Test Budget",
    income: [],
    expense: [],
    totalIncome: 5000,
    totalExpense: 4500,
    moneyLeft: 0
}

//DOM Elements

//header
const homeBtnEl = document.getElementById('home-btn')
const budgetDetailsPageHeaderTitleEl = document.getElementById('budget-details-page-header-title')
const newIncomeBtnEl = document.getElementById('new-income-btn')
const newExpenseBtnEl = document.getElementById('new-expense-btn')


//top section

const moneyLeftAmtEl = document.getElementById('money-left-amt')
const totalIncomeAmtEl = document.getElementById('total-income-amt')
const progressBarEl = document.querySelector('progress')

budget.moneyLeft = budget.totalIncome - budget.totalExpense

budgetDetailsPageHeaderTitleEl.innerHTML = `${budget.name}`
moneyLeftAmtEl.innerHTML = `$${budget.moneyLeft}`
totalIncomeAmtEl.innerHTML = `$${budget.totalIncome}`
progressBarEl.setAttribute('max', budget.totalIncome)
progressBarEl.setAttribute('value', budget.totalExpense)




//middle section
//bottom section
const incomeInputEl = document.getElementById("income-type")
const incomeAmountEl = document.getElementById("income-input-amount")
const inputAmountEl = document.getElementById("input-amount")



//Variables

//Functions

//Listeners 
newExpenseBtnEl.addEventListener("click", function() {
    const expenseType = typeSelectionEl.value
    const expenseAmount = Number(inputAmountEl.value)

    budget.expense.push(expenseAmount)
    budget.expenseTypeU.push(expenseType) 
    document.getElementById("create-expense").style.display = "none";
    document.getElementById("income-tab").classList.remove("active")
    document.getElementById("expense-tab").classList.add("active")
    renderBudget()
})

newIncomeBtnEl.addEventListener("click", function() {
    const incomeAmount = Number(totalIncomeAmtEl.value)
    const incomeType = incomeInputEl.value
    budget.salary.push(incomeAmount)
    budget.salaryTypeU.push(incomeType)
    document.getElementById("create-income").style.display = "none";
    renderSalary()
})



function openExpensePopup() {
    document.getElementById("create-expense").style.display = "block";
}

function openIncomePopup() {
    document.getElementById("create-income").style.display = "block";
}


function closePopup() {
    document.getElementById("create-income").style.display = "none";
    document.getElementById("create-expense").style.display = "none";
}


document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('new-expense-btn').addEventListener('click', openExpensePopup);
    document.getElementById('new-income-btn').addEventListener('click', openIncomePopup);
    document.getElementById('close-income-popup').addEventListener('click', closePopup);
    document.getElementById('close-expense-popup').addEventListener('click', closePopup);
});




















































// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://realtime-database-ae212-default-rtdb.firebaseio.com/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const budgetListInDB = ref(database, "budgetList")
// const budget = {
//     name: "Test Budget",
//     salary: [],
//     expense: [],
//     expenseTypeU: [],
//     expenseTypes: ["Rent" , "Transportation", "Food", "Utilities", "Entertainment", "Misc", "Other"],
//     sum: 0,
//     salarySum: 0,
//     moneyLeft: 0,
//     salaryTypeU: []

// }


// //Header Elements
// const headerTitleEl = document.getElementById('budget-page-header-title')
// const createNewExpenseBtnEl = document.getElementById('create-expense-btn')
// const createNewIncomeBtnEl = document.getElementById('create-income-btn')

// const typeSelectionEl = document.getElementById("selectType")
// const incomeInputEl = document.getElementById("income-type")
// const incomeAmountEl = document.getElementById("income-input-amount")
// const inputAmountEl = document.getElementById("input-amount")
// const addExpenseBtnEl = document.getElementById("add-expense")
// const addIncomeBtnEl = document.getElementById("add-income")
// const expensesListEl = document.getElementById("expenses")
// const salaryListEl = document.getElementById("salary")

// const totalSumEl = document.getElementById("total-sum")
// const totalExpenseEl = document.getElementById("expense-amt")


// const tabLinks = document.querySelectorAll(".tab-link")
// const tabContents = document.querySelectorAll(".tab-content")

// headerTitleEl.innerHTML = `${budget.name}`


// tabLinks.forEach((link) => {
//     link.addEventListener("click", (event) => {
//       // Deactivate all tabs
//       tabLinks.forEach((link) => link.classList.remove("active"))
//       tabContents.forEach((content) => content.classList.remove("active"))
  
//       // Activate the clicked tab
//       const tab = event.currentTarget.dataset.tab
//       event.currentTarget.classList.add("active")
//       document.getElementById(tab).classList.add("active")
//     })
//   })

// for (let i = 0; i < budget.expenseTypes.length; i++) {
//     let option = document.createElement("option")
//     option.value = budget.expenseTypes[i]
//     option.text = budget.expenseTypes[i]
//     typeSelectionEl.appendChild(option)
//   }

// // push(budgetListInDB, inputTypeValue, inputTypeAmount)






// function renderBudget() {
//     let expenseListItems = "" 
//     for (let i = 0; i < budget.expense.length; i++) {
//         expenseListItems += `<li>${budget.expenseTypeU[i]} - $${budget.expense[i]}</li><hr />` 
//     }
//     expensesListEl.innerHTML = expenseListItems
//     calculateSum()
//     calculateExpense()
//     clearField()
// }

// function renderSalary() {
//     let salaryListItems = "" 
//     for (let i = 0; i < budget.salary.length; i++) {
//         salaryListItems += `<li>${budget.salaryTypeU[i]} - $${budget.salary[i]}</li><hr />` 
//     }
//     salaryListEl.innerHTML = salaryListItems 
//     calculateSum()
//     calculateExpense()
//     clearField()
// }


// function calculateSum() {
//     const sum = budget.expense.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//     budget.sum = sum
//     totalSumEl.innerHTML = `$${budget.sum}`
// }



// function calculateExpense() {
//     const sum = budget.salary.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
//     budget.salarySum = sum
//     totalExpenseEl.innerHTML = `$${budget.salarySum - budget.sum}`


// }

    
// function clearField() {
//     document.getElementById("selectType").value = ""
//     document.getElementById("input-amount").value = "$0"
//     document.getElementById("income-type").value = ""
//     document.getElementById("income-input-amount").value = ""
    

// }


// function openExpensePopup() {
//     document.getElementById("create-expense").style.display = "block";
// }

// function openIncomePopup() {
//     document.getElementById("create-income").style.display = "block";
// }


// function closePopup() {
//     document.getElementById("create-income").style.display = "none";
//     document.getElementById("create-expense").style.display = "none";
// }


// document.addEventListener('DOMContentLoaded', (event) => {
//     document.getElementById('create-expense-btn').addEventListener('click', openExpensePopup);
//     document.getElementById('create-income-btn').addEventListener('click', openIncomePopup);
//     document.getElementById('close-income-popup').addEventListener('click', closePopup);
//     document.getElementById('close-expense-popup').addEventListener('click', closePopup);
// });


  
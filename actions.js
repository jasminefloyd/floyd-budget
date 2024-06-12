// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
// import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

// const appSettings = {
//     databaseURL: "https://realtime-database-ae212-default-rtdb.firebaseio.com/"
// }

// const app = initializeApp(appSettings)
// const database = getDatabase(app)
// const budgetListInDB = ref(database, "budgetList")

//Objects
const budget = {
    id: 0,
    name: "Test Budget",
    salary: [],
    salaryTypeU: [],
    expense: [],
    expenseTypeU: [],
    expenseTypes: ["Rent" , "Transportation", "Food", "Utilities", "Entertainment", "Misc", "Other"],
    sum: 0,
    moneyLeft: 0,
    totalIncome: 0,
    totalExpense: 0


}

//DOM Elements

//header
const homePageEl = document.getElementById('home-page')
const detailsPageEl = document.getElementById('budget-details-page')
const detailsOverviewPageEl = document.getElementById('budget-details-overview')


const homeBtnEl = document.getElementById('home-btn')
const budgetDetailsPageHeaderTitleEl = document.getElementById('budget-details-page-header-title')
const newIncomeBtnEl = document.getElementById('new-income-btn')
const newExpenseBtnEl = document.getElementById('new-expense-btn')


const typeSelectionEl = document.getElementById("selectType")
const newExpenseDropEl = document.getElementById('droppy')
const expenseInputAmountEl = document.getElementById('expense-input-amount')
const incomeInputAmountEl = document.getElementById('income-input-amount')
const submitExpenseBtnEl = document.getElementById('submit-expense')
const submitIncomeBtnEl = document.getElementById('submit-income')




//top section

const moneyLeftAmtEl = document.getElementById('money-left-amt')
const totalIncomeAmtEl = document.getElementById('total-income-amt')
const progressBarEl = document.getElementById('progress-bar')







//middle section
const tabLinks = document.querySelectorAll(".tab-link")
const tabContents = document.querySelectorAll(".tab-content")




//bottom section
const incomeInputEl = document.getElementById('income-type')
const incomeAmountEl = document.getElementById('income-input-amount')
const inputAmountEl = document.getElementById('input-amount')
const incomeListEl = document.getElementById('salary')
const expenseListEl = document.getElementById('expense')



//Variables
  



//Functions

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



function calculateExpense() {
    const sum = budget.expense.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    budget.totalExpense = sum
    budget.moneyLeft = budget.totalIncome - budget.totalExpense
    moneyLeftAmtEl.innerHTML = `$${budget.moneyLeft}`

}

function renderExpense() {
    let expenseListItems = " " 
    for (let i = 0; i < budget.expense.length; i++) {
        expenseListItems += `<li>${budget.expenseTypeU[i]} - $${budget.expense[i]}</li><hr />` 
    }
    expenseListEl.innerHTML = expenseListItems
    // calculateIncome()
    // calculateExpense()
    updateProgress()
    clearField()
}



function calculateIncome() {
    const sum = budget.salary.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    budget.totalIncome = sum
    budget.moneyLeft = budget.totalIncome - budget.totalExpense
    totalIncomeAmtEl.innerHTML = `$${budget.totalIncome}`
}


function renderIncome() {
    let salaryListItems = "" 
    for (let i = 0; i < budget.salary.length; i++) {
        salaryListItems += `<li>${budget.salaryTypeU[i]} - $${budget.salary[i]}</li><hr />` 
    }
    incomeListEl.innerHTML = salaryListItems 
    // calculateIncome()
    // calculateExpense()
    updateProgress()
    clearField()
}


function clearField() {
    document.getElementById("selectType").value = ""
    document.getElementById("expense-input-amount").value = "$0"
    document.getElementById("income-type").value = ""
    document.getElementById("income-input-amount").value = ""
    

}


function updateProgress() {
    progressBarEl.max = `${budget.totalIncome}`
    progressBarEl.value = `${budget.totalExpense}`
}


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

//Listeners 
homeBtnEl.addEventListener('click', function() {
    homePageEl.style.display = 'initial'
    detailsPageEl.style.display = 'none'
    detailsOverviewPageEl.style.display = 'none'
})


newExpenseBtnEl.addEventListener("click", function() {
    document.getElementById("create-expense").style.display = "none";
    document.getElementById("tab-income").classList.remove("active")
    document.getElementById("tab-expense").classList.add("active")

    submitExpenseBtnEl.addEventListener('click', function() {
        const expenseType = typeSelectionEl.value
        const expenseAmount = Number(expenseInputAmountEl.value)
    
        budget.expense.push(expenseAmount)
        budget.expenseTypeU.push(expenseType) 

        closePopup()
        renderExpense()

    })

   
})

newIncomeBtnEl.addEventListener("click", function() {
    document.getElementById("create-expense").style.display = "none";
    document.getElementById("tab-income").classList.add("active")
    document.getElementById("tab-expense").classList.remove("active")

    submitIncomeBtnEl.addEventListener('click', function() {
        const incomeAmount = Number(incomeInputAmountEl.value)
        const incomeType = incomeInputEl.value

        budget.salary.push(incomeAmount)
        budget.salaryTypeU.push(incomeType)

        closePopup()
        renderIncome()

    })

})













document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('new-expense-btn').addEventListener('click', openExpensePopup);
    document.getElementById('new-income-btn').addEventListener('click', openIncomePopup);
    document.getElementById('close-income-popup').addEventListener('click', closePopup);
    document.getElementById('close-expense-popup').addEventListener('click', closePopup);
    budgetDetailsPageHeaderTitleEl.innerHTML = `${budget.name}`
    
});





/*

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Expense', 'Cost'],
  ['Work', 8],
  ['Eat', 2],
  ['TV', 4],
  ['Gym', 2],
  ['Sleep', 8]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Budget Overview', 'width':550, 'height':400};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

*/















































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


  
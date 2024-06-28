document.addEventListener('DOMContentLoaded', () => {
    class Budget {
        constructor(id, categories, name, salary, expenses, e_total, s_total, moneyRem) {
            this.id = id;
            this.categories = categories || [];
            this.name = name;
            this.salary = salary || [];
            this.expenses = expenses || [];
            this.e_total = e_total || 0;
            this.s_total = s_total || 0;
            this.moneyRem = moneyRem || 0;
            this.expenseTypeU = [];
            this.salaryTypeU = [];
        }

        addSalary(amount, type) {
            this.salary.push(amount);
            this.salaryTypeU.push(type);
            this.calculateIncome();
            this.renderIncome();
        }

        addExpense(amount, type) {
            this.expenses.push(amount);
            this.expenseTypeU.push(type);
            this.calculateExpense();
            this.renderExpense();
        }

        calculateIncome() {
            this.s_total = this.salary.reduce((acc, curr) => acc + curr, 0);
            this.calculateMoneyRemaining();
        }

        calculateExpense() {
            this.e_total = this.expenses.reduce((acc, curr) => acc + curr, 0);
            this.calculateMoneyRemaining();
        }

        calculateMoneyRemaining() {
            this.moneyRem = this.s_total - this.e_total;
            document.getElementById('money-left-amt').innerHTML = `$${this.moneyRem}`;
            document.getElementById('total-income-amt').innerHTML = `$${this.s_total}`;
            document.getElementById('home-money-left-value').innerHTML = `$${this.moneyRem}`;
        }

        renderIncome() {
            let salaryListItems = "";
            for (let i = 0; i < this.salary.length; i++) {
                salaryListItems += `<li>${this.salaryTypeU[i]} - $${this.salary[i]}</li><hr />`;
            }
            document.getElementById('salary').innerHTML = salaryListItems;
            this.updateProgress();
            this.clearField();
        }

        renderExpense() {
            let expenseListItems = "";
            for (let i = 0; i < this.expenses.length; i++) {
                expenseListItems += `<li>${this.expenseTypeU[i]} - $${this.expenses[i]}</li><hr />`;
            }
            document.getElementById('expense').innerHTML = expenseListItems;
            this.updateProgress();
            this.clearField();
        }

        clearField() {
            document.getElementById('selectType').value = "";
            document.getElementById('expense-input-amount').value = "";
            document.getElementById('income-type').value = "";
            document.getElementById('income-input-amount').value = "";
        }

        updateProgress() {
            document.getElementById('progress-bar').max = `${this.s_total}`;
            document.getElementById('progress-bar').value = `${this.e_total}`;
        }
    }

    const tabLinks = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabLinks.forEach((link) => {
        link.addEventListener("click", (event) => {
            // Deactivate all tabs
            tabLinks.forEach((link) => link.classList.remove("active"));
            tabContents.forEach((content) => content.classList.remove("active"));
      
            // Activate the clicked tab
            const tab = event.currentTarget.dataset.tab;
            event.currentTarget.classList.add("active");
            document.getElementById(tab).classList.add("active");
        });
    });

    // Ensure the dropdown is populated with preset values
    const expenseTypes = ["Rent", "Utilities", "Groceries", "Entertainment", "Transportation", "Miscellaneous"];
    const typeSelectionEl = document.getElementById("selectType");

    expenseTypes.forEach((type) => {
        let option = document.createElement("option");
        option.value = type;
        option.text = type;
        typeSelectionEl.appendChild(option);
    });

    const budgets = [];
    let currentBudget;

    const homeBtnEl = document.getElementById('home-btn');
    const addNewBudgetBtnEl = document.getElementById('add-budget-btn');
    const submitNewBudgetBtnEl = document.getElementById('create-budget');
    const newIncomeBtnEl = document.getElementById('new-income-btn');
    const newExpenseBtnEl = document.getElementById('new-expense-btn');
    const submitExpenseBtnEl = document.getElementById('submit-expense');
    const submitIncomeBtnEl = document.getElementById('submit-income');
    const budgetNameInputEl = document.getElementById('budget-name');
    const budgetListEl = document.getElementById('budget-list');
    const closeNewBudgetPopupEl = document.getElementById('close-new-budget-popup');
    const closeExpensePopupEl = document.getElementById('close-expense-popup');
    const closeIncomePopupEl = document.getElementById('close-income-popup');

    const openPopup = (popupId) => {
        document.getElementById(popupId).style.display = 'block';
    }

    const closePopup = (popupId) => {
        document.getElementById(popupId).style.display = 'none';
    }


    // push(budgetListInDB, inputTypeValue, inputTypeAmount)

    addNewBudgetBtnEl.addEventListener('click', () => openPopup('create-new-budget'));

    closeNewBudgetPopupEl.addEventListener('click', () => closePopup('create-new-budget'));
    closeExpensePopupEl.addEventListener('click', () => closePopup('create-expense'));
    closeIncomePopupEl.addEventListener('click', () => closePopup('create-income'));

    submitNewBudgetBtnEl.addEventListener('click', () => {
        const budgetName = budgetNameInputEl.value.trim();
        if (budgetName) {
            const newBudget = new Budget(budgets.length + 1, [], budgetName, [], [], 0, 0, 0);
            budgets.push(newBudget);
            const budgetButton = document.createElement('button');
            budgetButton.className = 'budget-button';
            budgetButton.innerHTML = `
                <div class="button-col-1">
                    <p class="home-budget-name">${budgetName}</p>
                </div>
                <div class="button-col-2">
                    <div class="home-salary-container">
                        <p class="home-salary-label">Total Salary: </p>
                        <p class="home-salary-value" id="home-salary-value">$000.00</p>
                    </div>
                </div>
                <div class="button-col-3">
                    <div class="home-expenses-container">
                        <p class="home-expenses-label">Expenses: </p>
                        <p class="home-expenses-value">$000.00</p>
                    </div>
                    <div class="home-money-left-container">
                        <p class="home-money-left-label">Money Left: </p>
                        <p class="home-money-left-value" id="home-money-left-value">$000.00</p>
                    </div>
                </div>
            `;
            budgetButton.addEventListener('click', () => {
                currentBudget = newBudget;
                document.getElementById('home-page').style.display = 'none';
                document.getElementById('budget-details-page').style.display = 'block';
                document.getElementById('budget-details-page-header-title').innerText = budgetName;
                currentBudget.calculateIncome();
                currentBudget.calculateExpense();
            });
            budgetListEl.appendChild(budgetButton);
            closePopup('create-new-budget');
            budgetNameInputEl.value = '';
            clearBudget();
            
        }
    });

    newIncomeBtnEl.addEventListener('click', () => openPopup('create-income'));
    newExpenseBtnEl.addEventListener('click', () => openPopup('create-expense'));

    submitIncomeBtnEl.addEventListener('click', () => {
        const incomeType = document.getElementById('income-type').value.trim();
        const incomeAmount = parseFloat(document.getElementById('income-input-amount').value.trim());
        if (incomeType && !isNaN(incomeAmount) && currentBudget) {
            currentBudget.addSalary(incomeAmount, incomeType);
            closePopup('create-income');
        }
    });

    submitExpenseBtnEl.addEventListener('click', () => {
        const expenseType = document.getElementById('selectType').value.trim();
        const expenseAmount = parseFloat(document.getElementById('expense-input-amount').value.trim());
        if (expenseType && !isNaN(expenseAmount) && currentBudget) {
            currentBudget.addExpense(expenseAmount, expenseType);
            closePopup('create-expense');
        }
    });

    homeBtnEl.addEventListener('click', () => {
        document.getElementById('home-page').style.display = 'block';
        document.getElementById('budget-details-page').style.display = 'none';
    });

    document.querySelectorAll('.close-popup').forEach(el => {
        el.addEventListener('click', () => {
            el.parentElement.style.display = 'none';
        });
    });
});

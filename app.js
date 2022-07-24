
//Adding Transactions
    //Inputs
    const addButton = document.getElementById('addbutton')
    const transactionDetails = document.querySelector('.transactionDetails');
    const transactionAmount = document.querySelector('.transactionAmount');
    const historyList = document.querySelector('.history-items');
    const balanceAmount = document.querySelector('.balance-amount');
    const historyUl = document.querySelector('.history-list');
    const totalAmount = document.querySelectorAll('history-list-item');
    const incomeCounter = document.querySelector('.income-amount');
    const expenseCounter = document.querySelector('.expense-amount');
    
    addButton.addEventListener('click',(e)=>{

        //Preventing Refresh
        e.preventDefault();

        //Adding Transaction History
        if(transactionDetails.value == '' || transactionAmount.value == '' ){
            alert('Please enter your transaction details and amount.')
            return
        } else {
        const newHistoryItem = document.createElement('li');
        if(transactionAmount.value <= 0) {
            newHistoryItem.classList.add('expense-list-item')
        } else if(transactionAmount.value >= 0) {
            newHistoryItem.classList.add('income-list-item')
        } else if(transactionAmount.value == 0) {
            alert('Please enter either a positive or negative value.')
            return
        } else if (transactionDetails.value == '') {
            alert('Please enter your transaction details.')
            return
        }
        newHistoryItem.classList.add('history-list-item')
        newHistoryItem.innerHTML = `<p>${transactionDetails.value}</p><p>${transactionAmount.value}</p>`
        historyList.appendChild(newHistoryItem)

        //Converting Transaction Amount to Integer
        let intTransaction = parseFloat(transactionAmount.value)

        //Total Balance Updated
        let currentVal = parseFloat(balanceAmount.innerText)
        let totalTransaction = currentVal += intTransaction
        balanceAmount.innerText = totalTransaction

        //Updating Income or Expense
        let currentIncome = parseFloat(incomeCounter.innerText)
        let currentExpense = parseFloat(expenseCounter.innerText)
        if(intTransaction > 0){
            let displayedIncomeValue = currentIncome += intTransaction
            incomeCounter.innerText = displayedIncomeValue;
        } else {
            let displayedExpenseValue = currentExpense += intTransaction
            expenseCounter.innerText = Math.abs(displayedExpenseValue);
        }
                
        //Clearing Input Values After Adding a Transaction
        transactionDetails.value = '';
        transactionAmount.value = '';

        console.log(intTransaction)

    }
})


    
    


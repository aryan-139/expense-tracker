function addExpense(){
    const expenseVal = document.getElementById('expense').value;
    createExpenseTransaction(expenseVal);
}

function addIncome(){
    const incomeVal = document.getElementById('income').value;
    createIncomeTransaction(incomeVal);
}

function createExpenseTransaction(expenseVal){
    const expenseId= Math.floor(Math.random() * 1000000000);
    const time= new Date();
    const expenseAmount= expenseVal;
    const incomeAmount= 0;
    const expenseJSON={
        expenseId,
        time,
        expenseAmount,
        incomeAmount
    };
    addToTable(expenseJSON);
}

const createIncomeTransaction = (incomeVal) => {
    const incomeId= Math.floor(Math.random() * 1000000000);
    const time= new Date();
    const incomeAmount= incomeVal;
    const expenseAmount= 0;
    const incomeJSON={
        incomeId,
        time,
        expenseAmount,
        incomeAmount
    };
    addToTable(incomeJSON);
}

function addToTable(incomingData){
    const tableBody= document.getElementById('table-body');
    const tableRow= document.createElement('tr');
    if(incomingData.expenseId !== undefined){
        tableRow.innerHTML=`
        <td>${incomingData.expenseId}</td>
        <td>${incomingData.time}</td>
        <td>${incomingData.expenseAmount}</td>
        <td>${incomingData.incomeAmount}</td>
    `;
    }
    else{
        tableRow.innerHTML=`
        <td>${incomingData.incomeId}</td>
        <td>${incomingData.time}</td>
        <td>${incomingData.expenseAmount}</td>
        <td>${incomingData.incomeAmount}</td>
    `;
    } 
    tableBody.appendChild(tableRow);   
}

function calculateExpense(){
    console.log('Calculating expense');
}
calculateExpense();



const transactionsUl = document.querySelector('#transactions')

const dummyTransactions = [
  {id: 1, name: 'Bolo de brigadeiro', amount: -20},
  {id: 2, name: 'Salario', amount: 300},
  {id:3, name: 'Torta', amount: -10},
  {id: 4, name: 'Violão', amount: 150}
]

const addTransactionIntoDOM = transaction => {
  const operator = transaction.amount < 0 ? '-' : '+'
  const cssClass = transaction.amount < 0 ? 'minus' : 'plus'
  const amountWithoutOperator = Math.abs(transaction.amount)
  const li = document.createElement('li')

  li.classList.add(cssClass)
  li.innerHTML = `
  ${transaction.name} <span>${operator} R$ ${amountWithoutOperator}</span><button class="delete-btn">x</button>
  ` 
  transactionsUl.append(li)

}

const updateBalanceValues = () => {
  
}

const init = () => {
  dummyTransactions.forEach(addTransactionIntoDOM)
}

init()
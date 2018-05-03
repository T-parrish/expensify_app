const getExpensesTotal = (arr) => arr.reduce((total, {amount}) => total + amount, 0)  

export default getExpensesTotal
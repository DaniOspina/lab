export function CostCalculator(transactionAmount) {
    this.transactionAmount = transactionAmount;

    this.payments = function () {
        return this.transactionAmount + (transactionAmount*0.01) + 3
    }
}

const monthly = new CostCalculator(Number(process.argv[3]))
// const monthly = new CostCalculator(124)

console.log(monthly.payments());


// export function costCalculator(num) {
//     let transactionCost = Number((num + 3 + (num * 0.01)));  
//     return transactionCost
// }
// const cost = costCalculator(Number(process.argv[3]))
// console.log(cost)

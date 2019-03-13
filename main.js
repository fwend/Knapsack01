const values = [60, 100, 120];
const weights = [10, 20, 30];
const max = 50;

const knapsack01 = (totalValue, totalWeight, index) => {
    if (totalWeight > max) {
        return -1;
    }
    if (index === values.length) {
        return totalValue;
    }
    return Math.max(
        knapsack01(totalValue, totalWeight, index + 1),
        knapsack01(totalValue + values[index], totalWeight + weights[index], index + 1)
    )
};

console.log(knapsack01(0, 0, 0));
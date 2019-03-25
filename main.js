const values = [150, 35, 200, 160, 60, 45, 60, 40, 30, 10, 70, 30, 15, 10, 40, 70, 75, 80, 20, 12, 50, 10];
const weights = [9, 13,153, 50, 15, 68, 27, 39, 23, 52, 11, 32, 24, 48, 73, 42, 43, 22,  7, 18, 4, 30];
const max = 400;

// Total weight and value: [396, 1030]

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
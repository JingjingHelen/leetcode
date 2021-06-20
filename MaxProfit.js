//题目：给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 


//思路：依次遍历数组中的每个值，以数组的第一个元素作为最小值，然后挨个比较，遇到比它更小的就更新最小值。在比较的同时也更新最大利润值
 var maxProfit = function(prices) {
    let min_value = prices[0];
    let max_profit = 0;
    for (let i = 1; i < prices.length; i++) {
        //更新最小值
        if (prices[i] < min_value) {
            min_value = prices[i];
        } else if (prices[i] - min_value > max_profit) { //更新最大利润值
            max_profit = prices[i] - min_value;
        }
    }
    return max_profit;
};

maxProfit([7,1,5,3,6,4])

//结果为： 5
// 746. Min Cost Climbing Stairs
// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
//
// You can either start from the step with index 0, or the step with index 1.
//
// Return the minimum cost to reach the top of the floor.


const minCostClimbingStairs = (cost) => {

    if (cost.length === 1) return cost[0];
    if (cost.length === 2) return Math.min(cost[0], cost[1]);

    let minCostOneBefore = cost[1];
    let minCostTwoBefore = cost[0];

    for (let i = 2; i < cost.length; i++) {
        let minCostCurr = cost[i] + Math.min(minCostOneBefore, minCostTwoBefore);

        minCostTwoBefore = minCostOneBefore;
        minCostOneBefore = minCostCurr;
    }

    return Math.min(minCostOneBefore, minCostTwoBefore);



    /*if (cost.length === 1) return cost[0];
    if (cost.length === 2) return Math.min(cost[0], cost[1]);

    let ans;

    function helper(twoStepsBehind, oneStepBehind, currIdx) {
        if (currIdx >= cost.length) {
            ans = Math.min(twoStepsBehind, oneStepBehind);
            return;
        }
        let currCost = cost[currIdx] + Math.min(twoStepsBehind, oneStepBehind);
        helper(oneStepBehind, currCost, currIdx + 1);
    }

    helper(cost[0], cost[1], 2);

    return ans;*/

};



const cost = [10,15,20];  // expected 15
/*const cost = [1,100,1,1,1,100,1,1,100,1];*/  // expected 6

console.log(minCostClimbingStairs(cost));

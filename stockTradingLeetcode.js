var maxProfit = function(prices) {
    let purchasedStock=0, result=[];
    for(let i=0; i<prices.length; i++){
        for(let j=i+1; j<prices.length; j++){
            let breakExecution = false;
            if(i === 0 && prices[i] > prices[j]){
                break;
            }

            //purchase
            if(prices[i] < prices[j]){
                purchasedStock=prices[i];
                breakExecution = true; 
            }

            //sale
            if(purchasedStock && (purchasedStock < prices[i])){
                result.push(Math.abs(purchasedStock-prices[i]));
                purchasedStock = 0;
                breakExecution = true;
            }
            if((purchasedStock || prices[i] === 0) && (purchasedStock < prices[i+1])){
                result.push(Math.abs(purchasedStock-prices[i+1]));
                purchasedStock = 0;
                breakExecution = true;
            }
            if(breakExecution){
                break;
            }
        }
    }
    return getSum(result)
};

const getSum = (array) =>{
    return array.reduce((partialSum, a) => partialSum + a, 0)
}
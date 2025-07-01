// array reduce function explation in detail 

// reduce,filter,map are hte function in which we can do call back function 


const myNums = [1, 2, 3]

const myTotal = myNums.reduce(function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)

//note both things with and without arrow finction work nicell in both case 

const myTotal1 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal1);

const myTotal3 = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal3);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);

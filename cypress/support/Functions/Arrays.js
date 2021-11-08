/*
const items = [
    { name: 'Bike',         price: 100  },
    { name: 'TV',           price: 200  },
    { name: 'Album',        price: 10   },
    { name: 'Book',         price: 5    },
    { name: 'Phone',        price: 500  },
    { name: 'Computer',     price: 1000 },
    { name: 'Keyboard',     price: 25  }
]

//Return all products where price is less than or equal to 100 (creates new array)
const filteredItems = items.filter((item) => {
    return item.price <= 100
})
//console.log(filteredItems)

//Return a list of names in the array
const itemNames = items.map((item) => {
     return item.name
})
//console.log(itemNames)

//Return a list of prices in the array
const itemPrices = items.map((item) => {
    return item.price
})
//console.log(itemPrices)

//Returns specified item from an array
const foundItem = items.find((item) => {
    return item.name === 'Album'
})
//console.log(foundItem)

//Loop through the array and print each name
items.forEach((item) => {
    console.log(item.name)
})

//Checks array for low prices - returns t/f bool (returns true if ANY item meets condition)
const hasInexpensiveItems = items.some((item) => {
    return item.price <= 100
})
//console.log(hasInexpensiveItems)


//Checks array for low prices - returns t/f bool (returns true if ALL items meet condition)
const hasAllInexpensiveItems = items.every((item) => {
    return item.price <= 100
})
//console.log(hasAllInexpensiveItems)

//Adds up prices in the array starting at zero
const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal
}, 0)
//console.log(total)

//Checks whether an array contains a number
const numb = [1, 2, 3, 4, 5]
const includesTwo = numb.includes(2)
console.log(includesTwo)

//Iterate through the values of an array

 */
let arr = [5, 10, 15, 20, 25];

/*
//While
let i = 0
while (i < arr.length) {
    console.log(arr[i]);
    i ++;
}

//For loop
for (let i=0; i < arr.length; i++) {
    console.log(arr[i]);
}

//For / In loop
for (let i in arr) {
    console.log(arr[i]);
}

//For / Of loop
for (let i of arr) {
    console.log(i);
}
 */
//forEach method
arr.forEach((val) => {
    console.log(val)
});
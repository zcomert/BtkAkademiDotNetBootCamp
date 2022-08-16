const arr = [1,2,3,4,5]
const selectedItem = 1;
let newArr = [];

// döngü kur (3) numarayı ele.
for (const item of arr) {
    if (item!==selectedItem) {
        newArr.push(item);
    }
}

const newFilterArr = arr.filter(num => num!==selectedItem);
console.log(arr);
console.log(newArr);
console.log(newFilterArr);
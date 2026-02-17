
let obj = { name: "Rahul", age: 23, city: "Noida" };

let arr = ["name", "city"];

let result = {};
for(let i in obj){
    if(arr.includes(i)){
        result[i] = obj[i];
    }
}

console.log(result);
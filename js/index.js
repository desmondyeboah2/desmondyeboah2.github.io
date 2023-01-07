// camelize("background-color") == 'backgroundColor';
//let userInput = "background-color";

/* function camelize(str) {
let [a, b] = str.split("-")
console.log(a, b);
b = b.charAt(0).toUpperCase() + b.slice(1);
console.log(a, b)
let newString = a.concat(b);
console.log(newString)
}
 */

/* function camelize(str) {
    let newString = str.split("-")
                    . map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1) )
                    .join("")
    
return newString;


}


let result = camelize(userInput)

console.log(result) */

/* function filterRangeInPlace(arr, a, b) {
    for( let i = 0; i < arr.length; i++){


        if(arr[i] < a || arr[i] > b){
            arr.splice(i, 1)
        }


    }
    return arr;

}

let arr = [5, 3, 8, 1];
console.log(arr)

let result = filterRangeInPlace(arr, 1, 4)
console.log(arr, result)
 */

/* function getUniqueNumbers(arr) {
    return arr.filter( (element, index, array) => 
        arr.indexOf(element) === index
    )
}


let a = ["hello", "world", "hello", "hello", "World", "SoloLearn"];

let result = getUniqueNumbers(a);

console.log(result)


console.log(a.indexOf(a[1])) */

/* function groupById(users) {
    return users.reduce( (accumlator, currentItem, currentIndex, array) => {
        accumlator[currentItem.id] = currentItem;
        console.log(accumlator)
        return accumlator
    }, {})
}

let users = [
    {id:"john", name:"John Smith", age:20 },
    {id:"ann", name:"Ann Smith", age:24 },
    {id:"pete", name:"Pete Peterson", age: 31},
]

let userById = groupById(users); */

/* 
let arr = [1, 2, 3, 4, 5];

let obj = {
    start : 1,
    end : 5,
}

obj[Symbol.iterator] = function() {
    return {
        current : this.start,
        last : this.end,

        next() {
            if(this.current <= this.last) {
                return {done: false, value: this.current++}
            } else {
                return {done: true}
            }
        }
    }
}



for(let num of obj){
    console.log(num)
} */
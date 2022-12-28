
function shuffle(arr) {
    for(let i = arr.length-1; i >0; i--) {
        let lastArray = arr[i]
        let r = Math.floor(Math.random() * i + 1);
        //  arr[i] = arr[r];
        //  arr[r] = lastArray;
        [arr[i], arr[r]] = [arr[r], arr[i]]
        document.getElementById('array-solution').innerHTML = arr;
    }
}


let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr);




console.log(arr);

document.getElementById('array-field').innerHTML = `Array = [ ${arr}]`

let shuffleBtn = document.getElementById('shuffle-btn');

let newArr = document.getElementById("array-solution")
newArr.innerHTML = arr;



function shuffle(arr){
    for(i = arr.length-1; i > 0; i--){
    let eachItem = arr[i];
    let k = Math.floor(Math.random() * i + 1 )
    console.log(k)
    arr[i] = arr[k]
    arr[k] = eachItem
    
} 

}


let arr = [1, 2, 3];

shuffle(arr)
console.log(arr)


/* 
let random = Math.floor(Math.random() * 10)
console.log(random);


function random(min, max) {
   let random =  Math.floor(Math.random() * max - min  )
   return random;
}

console.log(random(0, 3))*/
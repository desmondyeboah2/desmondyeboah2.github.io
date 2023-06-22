let fullName = prompt("Please Enter your Name"," Desmond Yeboah");
if(fullName === null || fullName === "") {
    fullName = "UNKOWN"
}

let greeting = document.getElementById("welcome-division");
greeting.innerHTML = "Welcome " + fullName;
console.log(greeting)
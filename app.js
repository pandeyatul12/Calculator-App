let container = document.querySelector('#container');
let addBtn = document.querySelector("#add-btn");
let subBtn = document.querySelector("#sub-btn");
let mulBtn = document.querySelector("#mul-btn");
let divBtn = document.querySelector("#div-btn");
let equalBtn = document.querySelector("#equal-btn")
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let num5 = document.querySelector("#num5");
let num6 = document.querySelector("#num6");
let num7 = document.querySelector("#num7");
let num8 = document.querySelector("#num8");
let num9 = document.querySelector("#num9");
let num0 = document.querySelector("#num0"); 

temp1=num1.innerText;
temp2=num2.innerText;
temp3=num3.innerText;
temp4=num4.innerText;
temp5=num5.innerText;
temp6=num6.innerText;
temp7=num7.innerText;
temp8=num8.innerText;
temp9=num9.innerText;
temp0=num0.innerText;

let sum =0;

addBtn.addEventListener("click", add)
function add(n){
    let display = document.createElement('div');
    display.innerText = "+";
    container.appendChild(display);
    sum = sum + n;
    console.log(sum)
}

subBtn.addEventListener("click", sub)
function sub(...args){
    sum = args[0];
    args.forEach(element => {
        sum -= element;
     });
    return sum;
}

mulBtn.addEventListener("click", mul)
function mul(...args){
    sum = args[0];
    args.forEach(element => {
        sum *= element; 
     });
    return sum;
}

divBtn.addEventListener("click", div)
function div(...args){
    sum = args[0];
    args.forEach(element => {
        sum /= element; 
     });
    return sum;
}

function operate(operator, num1, num2){
    add(operator, num1, num2);
}


function nums(){
    let n1 = 0;
    let n2 = 0;
    let n = 0;
num1.addEventListener('click', function display(){
    let display = document.createElement('div');
    display.innerText = "1";
    container.appendChild(display);
    n = display.innerText;
});

num2.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "2";
    container.appendChild(display);
});

num3.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "3";
    container.appendChild(display);
});

num4.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "4";
    container.appendChild(display);
});

num5.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "5";
    container.appendChild(display);
});

num6.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "6";
    container.appendChild(display);
});

num7.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "7";
    container.appendChild(display);
});

num8.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "8";
    container.appendChild(display);
});

num9.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "9";
    container.appendChild(display);
});

num0.addEventListener('click', function save(){
    let display = document.createElement('div');
    display.innerText = "0";
    container.appendChild(display);
});
}

nums() 

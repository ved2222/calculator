let inputStr = "";
let butN = document.querySelectorAll(".divc");
let AC = document.querySelector(".divac");
let sqrsqrt = document.querySelector(".divrdc");
let equalTo = document.querySelector(".diveqc");
let del = document.querySelector(".divdc");
let SIN1 = document.querySelector(".sin1");
let COS1 = document.querySelector(".cos1");
let TAN1 = document.querySelector(".tan1");

AC.addEventListener("click", () => {
    inputStr = "";
    document.querySelector(".text-4xl").innerHTML=inputStr;
});

sqrsqrt.addEventListener("click", () => {
    if (sqrsqrt.innerHTML === "sqr") 
    {
        sqrsqrt.innerHTML = "sqrt";
        document.querySelector(".sqr_sqrt").innerHTML="sqr";
        inputStr = Math.sqrt(parseFloat(inputStr));
        document.querySelector(".text-4xl").innerHTML=inputStr;
    } 
    else 
    {
        sqrsqrt.innerHTML = "sqr";
        document.querySelector(".sqr_sqrt").innerHTML="sqrt";
        inputStr = Math.pow(parseFloat(inputStr), 2);
        document.querySelector(".text-4xl").innerHTML=inputStr;
    }
});

butN.forEach((button) => {
    button.addEventListener("click", () => {
        inputStr += button.innerHTML;
        document.querySelector(".text-4xl").innerHTML = inputStr;
    });
});

equalTo.addEventListener("click", () => {
    inputStr = eval(inputStr);
    document.querySelector(".text-4xl").innerHTML = inputStr;
});

del.addEventListener("click", () => {
    inputStr = inputStr.slice(0, -1);
    document.querySelector(".text-4xl").innerHTML = inputStr;
});

SIN1.addEventListener("click", () => 
{
    let inputValue = parseFloat(inputStr);
    inputValue = inputValue * Math.PI / 180;
    inputStr = Math.sin(inputValue);
    document.querySelector(".text-4xl").innerHTML = inputStr;
});

TAN1.addEventListener("click", () => 
{
    let inputValue = parseFloat(inputStr);
    inputValue = inputValue * Math.PI / 180;
    inputStr = Math.tan(inputValue);
    document.querySelector(".text-4xl").innerHTML = inputStr;
});

COS1.addEventListener("click", () => 
{
    let inputValue = parseFloat(inputStr);
        inputValue = inputValue * Math.PI / 180;
    inputStr = Math.cos(inputValue);
    document.querySelector(".text-4xl").innerHTML = inputStr;
});




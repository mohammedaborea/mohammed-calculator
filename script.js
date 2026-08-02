const display = document.getElementById("display");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const ac = document.getElementById("ac");
const del = document.getElementById("del");

zero.addEventListener("click", () => display.value += "0");
one.addEventListener("click", () => display.value += "1");
two.addEventListener("click", () => display.value += "2");
three.addEventListener("click", () => display.value += "3");
four.addEventListener("click", () => display.value += "4");
five.addEventListener("click", () => display.value += "5");
six.addEventListener("click", () => display.value += "6");
seven.addEventListener("click", () => display.value += "7");
eight.addEventListener("click", () => display.value += "8");
nine.addEventListener("click", () => display.value += "9");

dot.addEventListener("click", () => display.value += ".");

plus.addEventListener("click", () => display.value += "+");
minus.addEventListener("click", () => display.value += "-");
multiply.addEventListener("click", () => display.value += "*");
divide.addEventListener("click", () => display.value += "/");

ac.addEventListener("click", () => {
    display.value = "";
});

del.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

equal.addEventListener("click", calculate);

function calculate() {
    try {
        if (display.value.trim() === "") return;
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", function (event) {

    if (event.key >= "0" && event.key <= "9") {
        display.value += event.key;
    }

    else if (event.key === "+") {
        display.value += "+";
    }

    else if (event.key === "-") {
        display.value += "-";
    }

    else if (event.key === "*") {
        display.value += "*";
    }

    else if (event.key === "/") {
        display.value += "/";
    }

    else if (event.key === ".") {
        display.value += ".";
    }

    else if (event.key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }

    else if (event.key === "Escape") {
        display.value = "";
    }

    else if (event.key === "Enter") {
        calculate();
    }

});
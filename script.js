const input = document.getElementById("operations");
const ans = document.getElementById("ans");

function dis(key) {
    input.value += key;
}

document.addEventListener("keypress", (e) => {
    if (
        (e.key == 0) |
        (e.key == 1) |
        (e.key == 2) |
        (e.key == 3) |
        (e.key == 4) |
        (e.key == 5) |
        (e.key == 6) |
        (e.key == 7) |
        (e.key == 8) |
        (e.key == 9) |
        (e.key == "/") |
        (e.key == "*") |
        (e.key == "-") |
        (e.key == "+")
    ) {
        dis(e.key);
    } else if (e.key == "Enter") {
        document.getElementById("enter").click();
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Backspace") document.getElementById("delete").click();
});

function allClr() {
    input.value = "";
    ans.value = "";
}

function clr() {
    input.value = "";
}

function solve() {
    ans.value = String(eval(input.value));
    input.value = "";
}

function del() {
    if (input.value != "") {
        input.value = input.value.substring(0, input.value.length - 1);
    }
}

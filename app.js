let myInput = document.querySelector("#my-input-1");
let keyPressed = document.querySelector("#key-pressed");
let keyCode = document.querySelector("#key-code");
let charCode = document.querySelector("#char-code");
let inputVal = document.querySelector("#input-value");
let inputname = document.querySelector("#input-name");
let inputType = document.querySelector("#input-type");
let eventType = document.querySelector("#event-type");

const targetTheVal = (per) => {
    keyPressed.innerText = `Key Pressed: ${per.key}`
    keyCode.innerText = `Key Code: ${per.code}`
    charCode.innerText = `Char Code: ${per.key.charCodeAt(0)}`
    inputVal.innerText = `Input Value: ${per.target.value}`
    inputname.innerText = `Input Name: ${per.target.name}`
    inputType.innerText = `Input Type: ${per.target.type}`
    eventType.innerText = `Event Type: ${per.type}`
};

myInput.addEventListener("keydown", (evt) => {
    targetTheVal(evt);
});
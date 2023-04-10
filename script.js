const centimeter = document.querySelector("#cm"),
inch = document.querySelector("#in");

window.addEventListener("load",() => centimeter.focus());

centimeter.addEventListener("input", ()=>{
    inch.value = (centimeter.value * 0.3937).toFixed(4);
    if(!centimeter.value) inch.value ="";
});

inch.addEventListener("input", ()=>{
    centimeter.value = (inch.value * 2.54).toFixed(4);
    if(!inch.value) inch.value ="";
});
const usd = document.querySelector("#us"),
thb = document.querySelector("#th");

window.addEventListener("load",() => centimeter.focus());

usd.addEventListener("input", ()=>{
    thb.value = (usd.value * 34.32).toFixed(2);
    if(!usd.value) thb.value ="";
});

thb.addEventListener("input", ()=>{
    usd.value = (thb.value * 0.029).toFixed(2);
    if(!thb.value) usd.value ="";
});
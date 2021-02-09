const arrInput = document.querySelector("#array-input");
const valInput = document.querySelector("#value-input");
const resultButton = document.querySelector(".result-button");
const result = document.querySelector(".result");

resultButton.addEventListener('click', function(){
    const arr = arrInput.value.split(',');
    const isContain = arr.some(e => e.trim() === valInput.value);

    if (isContain)  result.textContent = "포함";
    else    result.textContent = "미포함";
})
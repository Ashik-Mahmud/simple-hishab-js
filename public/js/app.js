const displayHishab = document.querySelector(".display-hishab");
const subtotal = displayHishab.querySelector(".subtotal span");
const chargeTotal = displayHishab.querySelector(".charge span");
const inTotal = displayHishab.querySelector(".intotal span");
var inputFields = document.querySelectorAll(".input-field");

inputFields.forEach(inputField => {
    let increaseBtn = inputField.querySelector(".increase-btn");
    let decreaseBtn = inputField.querySelector(".decrease-btn");
    let input = inputField.querySelector("input");
    let fee = parseFloat(input.getAttribute("data-fee"));
    var index = 0;
    // increase fee buttons 
    increaseBtn.onclick = () => {
        index++;
        input.value = index;
        decreaseBtn.classList.remove("disabled");
        calculate(input.value, fee);

    }
    // decrease fee buttons 
    decreaseBtn.onclick = () => {
        index--;
        if (index < 0) {
            decreaseBtn.classList.add("disabled");
        } else {
            input.value = index;
            calculate(input.value, fee);
        }
    }

})

function calculate(val, fee) {
    let firstInput = 0;
    let lastInput = 0;
    let storeFirstTotal = document.querySelector('[data-total-150]')
    let storeSecondTotal = document.querySelector('[data-total-100]')
    if (fee === 150) {
        firstInput = val * fee;
        storeFirstTotal.setAttribute('data-total-150', firstInput);
    }
    if (fee === 100) {
        lastInput = val * fee;
        storeSecondTotal.setAttribute('data-total-100', lastInput);
    }
    let firstTotal = storeFirstTotal.getAttribute('data-total-150');
    let lastTotal = storeSecondTotal.getAttribute('data-total-100');

    let total = Number(firstTotal) + Number(lastTotal);
    let charge = total * 0.05;
    let rawTotal = total + charge;
    subtotal.innerText = total;
    chargeTotal.innerText = charge;
    inTotal.innerText = rawTotal;

}
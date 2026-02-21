// #### when clear pressed then make form default, meaning original values 
// #### whenever any button or input value written enable reset button. 
// #### I guess error need to be enabled by default as any event will enable error 


// #### any input pressed 
// enable reset button, check for error, update output button 

// #### when any tip button pressed
// toggle their classes, change global tip, and ( default any input pressed event)

// #### in input whenever non integer element pressed, erase it instaneously, so we can limit only digits 

// ### when custom input changed, toggle all tip button to disable 
// ### and vice versa, if tip button pressed custom input should goto default.

// function clearSearch(inputEl) {
//   inputEl.value = "";
//   inputEl.blur(); // optional: removes focus
// input.dispatchEvent(new Event("input")); --- to reset input task that might have happened.;
// }


tipButtons = document.querySelectorAll(".button-collection .btn");
tipsParent = tipButtons[0].parentElement;
resetButton = document.querySelector(".output button")
tipInput = document.querySelector("#custom-tip")
billInput = document.querySelector("#bill")
numberOfPeopleInput = document.querySelector("#people")
errorMessageElement = document.querySelector(".error");
tipOutputElement = document.querySelector(".tip-box .output-value");
tipPerPersonElement = document.querySelector(".total-box .output-value")
tip = 0;

function trigger_error() {
    errorMessageElement.style.display = "block"
    if(! numberOfPeopleInput.classList.contains("error")){
        numberOfPeopleInput.classList.add("error")
    }
}

function clear_error() {
    errorMessageElement.style.display = "none"
    if(numberOfPeopleInput.classList.contains("error")){
        numberOfPeopleInput.classList.remove("error")
    }
}

function reset_tip_button() {
    for (const btn of tipButtons) {
        if (btn.classList && btn.classList.contains("clicked"))
            btn.classList.remove("clicked");
    }
    tip = 0;
}

function update_tip() {
    // meaning make calculation from scrach
    bill_amount = 0, numberOfPeople = 0;
    console.log(billInput.value,)
    if (billInput.value)
        bill_amount = +billInput.value;
    if (numberOfPeopleInput.value)
        numberOfPeople = +numberOfPeopleInput.value;
    console.log(bill_amount, numberOfPeople)
    console.log(typeof bill_amount, typeof tip, typeof numberOfPeople)
    if (bill_amount && !numberOfPeople) {
        // then trigger error
        console.log("error")
        trigger_error();
        return;
    }
    clear_error();

    if (bill_amount) {
        // update tip
        total_tip = bill_amount * tip / 100;
        tip_per_person = total_tip / numberOfPeople + .0;
        console.log(tip_per_person)
        tipOutputElement.textContent = `$${tip_per_person.toFixed(2)}`

        // update bill
        totalBill = bill_amount + total_tip + .0;
        bill_per_person = totalBill / numberOfPeople;
        console.log(bill_per_person)
        tipPerPersonElement.textContent = `$${bill_per_person.toFixed(2)}`
    }
    // enable reset button
    if (resetButton.classList.contains("btn-disable"))
        resetButton.classList.remove("btn-disable");
}

function add_int_only(e) {
    console.log(e.target);
    // replacing whole, to also cater to cases like copy paste etc..
    const input = e.target;
    input.value = input.value.replace(/\D/g, "");
    // otherwise we need to trigger update_tip
    if(input.value)
        update_tip();
}
billInput.addEventListener("input", add_int_only);
numberOfPeopleInput.addEventListener("input", add_int_only);

tipsParent.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList && e.target.classList.contains("btn")) {
        tipInput.value = "";
        reset_tip_button();
        if (!e.target.classList.contains("clicked"))
            e.target.classList.add("clicked")
        tip = +e.target.textContent.slice(0, -1);
        update_tip();
    }
});
tipsParent.addEventListener("input", (e) => {
    const input = e.target;
    input.value = input.value.replace(/\D/g, "");
    reset_tip_button();
    if(e.target.value)
        tip = +e.target.value;
    console.log(tip);
    update_tip();
});


// add click listener to reset button to clear inputs and outputs
resetButton.addEventListener("click", function (e) {

    // reset input fields to default/empty
    billInput.value = "";
    tipInput.value = "";
    numberOfPeopleInput.value = "";

    reset_tip_button();

    // reset internal tip value and outputs
    tipOutputElement.textContent = "0.00";
    tipPerPersonElement.textContent = "0.00";

    if (!resetButton.classList.contains("btn-disable"))
        resetButton.classList.add("btn-disable");
});
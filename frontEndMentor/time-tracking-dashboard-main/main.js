console.log("working");

const buttons_parent = document.querySelector('.stat');
buttons = document.querySelectorAll(".stat button")
const cards = document.querySelectorAll('.card');
let data = [];
stat = "weekly"

function objectify_document() {
    let card_object = {}
    cards.forEach(card => {
        title = card.querySelector(".card-about h3").textContent.trim();
        // console.log(title)
        card_object[title] = {
            current: card.querySelector(".card-current-stat h2"),
            previous: card.querySelector(".card-prev-stat p")
        }
        // console.log(card_object[title]["current"], card_object[title]["prevoius"])
    });
    return card_object;
}

objects = objectify_document();

function update_data() {
    let suffix = ""
    if (stat == "weekly") suffix = "Last Week"
    if (stat == "monthly") suffix = "Last Month"
    else suffix = "Yesterday"
    data.forEach(d => {
        object_to_modify = objects[d.title]
        current = d.timeframes[stat].current
        previous = d.timeframes[stat].previous

        object_to_modify.current.textContent = `${current}${current >= 1 ? "hrs" : "h"}`
        object_to_modify.previous.textContent = `${suffix} - ${previous}${previous >= 1 ? "hrs" : "h"}`
    })
}

fetch("./data.json")
    .then(response => response.json())
    .then(jsonResponse => {
        data = jsonResponse
        console.log(jsonResponse)
    })
    .catch(value => console.log(value))

buttons_parent.addEventListener("click", (e) => {
    // e.target is real target which is clicked.
    if (e.target.tagName != "BUTTON")
        return;
    buttons.forEach(button => {
        if (button.classList.contains(`${stat}-stat`))
            button.classList.remove("active")
    });
    if (e.target.classList.contains("daily-stat")) {
        stat = "daily";
    }
    else if (e.target.classList.contains("weekly-stat")) {
        stat = "weekly"
    }
    else if (e.target.classList.contains("monthly-stat")) {
        stat = "monthly"
    }
    e.target.classList.add("active")
    update_data();
})
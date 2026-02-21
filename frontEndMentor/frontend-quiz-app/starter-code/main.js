const headerElement = document.querySelector(".nav-bar .item-box")
const resultHeaderElement = document.querySelector(".result-page .options .item")
const mainPageSection = document.querySelector(".main-page")
const quizPageSection = document.querySelector(".quiz-page")
const resultPageSection = document.querySelector(".result-page")
const quiz_type_buttons = document.querySelectorAll(".main-page .options .item-box")
const submit_buttom = document.querySelector("button.submit");
const themeChangeButton = document.querySelector(".nav-button");
let questionId = 9;
let answered = true;
let theme = "light";

console.log(submit_buttom);

themeChangeButton.addEventListener("click", (e) => {
    target = e.currentTarget;
    const previousImage = target.previousElementSibling;
    const nextImage = target.nextElementSibling;
    document.body.classList.toggle("dark")
    if(theme == "light"){
        theme = "dark";
    }
    else {
        theme = "light";
    }
    console.log("toggling" + theme);
})

const remove_class = (element, className) => {
    if(element.classList.contains(className))
        element.classList.remove(className)
    console.log(element, element.classList)
}

const add_class = (element, className) => {
    if(!element.classList.contains(className))
        element.classList.add(className)
    console.log(element, element.classList)
}

// for quiz page first thing is icon depends on what clicked on main page...
function quizPage(){
    console.log("quizPage")
    remove_class(headerElement, "hide");
    remove_class(quizPageSection, "remove");
    add_class(mainPageSection, "remove");
    add_class(resultPageSection, "remove");
}

function mainPage() {
    add_class(headerElement, "hide");
    add_class(quizPageSection, "remove");
    remove_class(mainPageSection, "remove");
    add_class(resultPageSection, "remove");
}

function resultPage() {
    remove_class(headerElement, "hide");
    add_class(quizPageSection, "remove");
    add_class(mainPageSection, "remove");
    remove_class(resultPageSection, "remove");
}

function cloneHeader(current, target) {
    currentImage = current.querySelector(".item-image")
    targetImage = target.querySelector(".item-image");

    currentText = current.querySelector(".item-text");
    targetText = target.querySelector(".item-text");

    targetImage.style.backgroundImage = getComputedStyle(currentImage).backgroundImage;
    targetImage.style.backgroundColor = getComputedStyle(currentImage).backgroundColor;
    targetText.textContent = currentText.textContent;
    console.log(current, target);
}

function mainPageToQuizPageHander() {
    quiz_type_buttons.forEach(button => {
        button.addEventListener("click", (e)=> {
            e.preventDefault();
            // we always want to send button, not target clicked
            cloneHeader(e.currentTarget, headerElement);
            cloneHeader(e.currentTarget, resultHeaderElement);
            quizPage();
        });
    });
}



function quizPageToResultPageHander() {
    submit_buttom.addEventListener("click" , (e) => {
        e.preventDefault();
        // answered will change content of submit button
        // it's for moving to next, if we are at 9th we don't need to move next, score.
        if(questionId === 9 && answered) {
            // we are submitting on last question
            questionId = 0;
            answered = false;
            // move to next state --- resultPage
            resultPage();
        }
        questionId += 1;
        answered = false;
        // trigger to show new question
    })
}

mainPage();
// these handlers are only to be applied after we have loaded data, if not then no handlers needed
mainPageToQuizPageHander();
quizPageToResultPageHander();
// quizPage();
// resultPage();


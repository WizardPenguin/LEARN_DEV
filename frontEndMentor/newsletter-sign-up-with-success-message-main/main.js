console.log("js");

let btn = document.querySelector(".submit-group");
let dismiss_btn = document.querySelector(".btn-dismiss");
let email = document.querySelector("#email");
let error = document.querySelector("#email-error");
let submitted_email = "";
let email_span = document.querySelector(".submit-email");

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function check_email() {
    if (!validateEmail(email.value) || email.value === "") {
        error.textContent = "Valid email required";
        if(email.classList.contains("invalid-input")) {
            return false;
        }
        email.classList.add("invalid-input");
        console.log(email.classList)
        return false;

    } else {
        error.textContent = "";
        email.classList.remove("invalid-input");
        console.log(email.classList)
        return true;
    }
}

if(btn && email && error)
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (check_email()) {
            localStorage.setItem("email", email.value);
            console.log(submitted_email)
            window.location.href = "success.html";
        }
    })

if(dismiss_btn)
    dismiss_btn.addEventListener("click", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
        localStorage.removeItem("email");
    })

if(email && error)
    email.addEventListener("input", () => {
        if(email.classList.contains("invalid-input")) { 
            check_email();
        }
    })

if(email_span) 
    email_span.textContent = localStorage.getItem("email");

let steps = document.querySelectorAll(".progress-step p");

let currentStep = 0;

let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let line = document.querySelector(".line span");

next.addEventListener("click", () => {
    currentStep = currentStep + 1;
    if (currentStep > 3) {
        currentStep = 3;
    }
    next.disabled = currentStep === 3;
    prev.disabled = currentStep === 0;
    steps.forEach((step, index) => {
        if (index <= currentStep) {
            step.classList.add("active");
            line.style.width = (currentStep * 100) + "px";
        }
    });
});

prev.addEventListener("click", () => {
    currentStep = currentStep - 1;
    if (currentStep < 0) {
        currentStep = 0;
    }
    next.disabled = currentStep === 3;
    prev.disabled = currentStep === 0;
    steps.forEach((step, index) => {
        if (index > currentStep) {
            step.classList.remove("active");
            line.style.width = (currentStep * 100) + "px";
        }
    });
});

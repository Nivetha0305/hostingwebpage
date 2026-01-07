const questions = document.querySelectorAll(".faq-question");
questions.forEach((question) => {
    question.addEventListener("click", () => {
        const faqItem = question.parentElement;
        const answer = question.nextElementSibling;
        faqItem.classList.toggle("active");
        if (answer.style.display === "block") {
            answer.style.display = "none";
        }
        else {
            answer.style.display = "block";
        }
    });
});

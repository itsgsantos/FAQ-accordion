const questions = document.querySelectorAll(".faq dt");
questions[0].classList.add("active");
questions[0].nextElementSibling.classList.add("active");

questions.forEach((question) => {
  question.addEventListener("click", showAnswer);
});

function showAnswer() {
  this.classList.toggle("active");
  this.nextElementSibling.classList.toggle("active");
}

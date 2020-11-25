// Global Variables
const outcomeItems = document.querySelectorAll('.outcomes__item')
const prevArrow = document.querySelector('.prev-arrow')
const nextArrow = document.querySelector('.next-arrow')

// Outcomes Code
let currentOutcome = 0;

const switchOutcomes = (change) => {
  if (currentOutcome + change < 0) {
    currentOutcome = outcomeItems.length - 1; 
  } else if (currentOutcome + change > outcomeItems.length - 1) {
    currentOutcome = 0;
  } else {
    currentOutcome = currentOutcome + change
  }
  outcomeItems.forEach((outcome, index) => {
    index === currentOutcome ? outcome.classList.remove('hidden') : outcome.classList.add('hidden')
  });
}

prevArrow.addEventListener('click', () => switchOutcomes(-1))
nextArrow.addEventListener('click', () => switchOutcomes(1))
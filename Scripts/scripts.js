// Outcomes Javascript
// Global Variables
const outcomeItems = document.querySelectorAll('.outcomes__item')
const prevArrow = document.querySelector('.prev-arrow')
const nextArrow = document.querySelector('.next-arrow')

let currentOutcome = 0;

const switchOutcomes = (change) => {
  let tempOutcome = currentOutcome
  if (currentOutcome + change < 0) {
    currentOutcome = outcomeItems.length - 1; 
  } else if (currentOutcome + change > outcomeItems.length - 1) {
    currentOutcome = 0;
  } else {
    currentOutcome = currentOutcome + change
  }
  outcomeItems.forEach((outcome, index) => {
    if (index === currentOutcome) {
      outcome.classList.remove('hidden')
      outcome.classList.remove('outcome-fadeOut')
      outcome.classList.add('outcome-fadeIn')
    } 
    if (index === tempOutcome) {
      outcome.classList.remove('outcome-fadeIn')
      outcome.classList.add('outcome-fadeOut')
      outcome.classList.add('hidden')
    }
  });
}

prevArrow.addEventListener('click', () => switchOutcomes(-1))
nextArrow.addEventListener('click', () => switchOutcomes(1))





// Audience Javascript
const select = document.querySelector('select')
const audienceSections = document.querySelectorAll('.audience-items__subset')

const switchAudience = (audience) => {
  audienceSections.forEach((audienceSection) => {
    let dataAudience = audienceSection.getAttribute('data-audience')
    if (!audienceSection.classList.contains('hidden')) {
      audienceSection.classList.remove('audience-fadeIn')
      audienceSection.classList.add('audience-fadeOut')
      audienceSection.classList.add('hidden')
      setTimeout(audienceSection.classList.remove('audience-fadeOut'), 1000)
    }
    if (dataAudience === audience) {
      audienceSection.classList.remove('hidden')
      audienceSection.classList.add('audience-fadeIn')
    }
  })
}

select.addEventListener('change', () => switchAudience(select.value))

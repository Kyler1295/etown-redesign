// Outcomes Javascript
// Global Variables
const outcomeItems = document.querySelectorAll('.outcomes__item')
const prevArrow = document.querySelector('.prev-arrow')
const nextArrow = document.querySelector('.next-arrow')

let currentOutcome = 0;

// Changes the Outcomes
const switchOutcomes = (change) => {
  // For Removing Classes
  let tempOutcome = currentOutcome
  // Checks if array is at the start or end
  if (currentOutcome + change < 0) {
    currentOutcome = outcomeItems.length - 1; 
  } else if (currentOutcome + change > outcomeItems.length - 1) {
    currentOutcome = 0;
  } else {
    currentOutcome = currentOutcome + change
  }
  // Loops through outcomes and removes/adds the correct classes
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
const select = document.querySelector('#audience')
const audienceSections = document.querySelectorAll('.audience-items__subset')

// Changes the Audience
const switchAudience = (audience) => {
  // Loops through the Audiences
  audienceSections.forEach((audienceSection) => {
    // Gets the currently selected Audience
    let dataAudience = audienceSection.getAttribute('data-audience')
    // Removes classes from current selected class
    if (!audienceSection.classList.contains('hidden')) {
      audienceSection.classList.remove('audience-fadeIn')
      audienceSection.classList.add('audience-fadeOut')
      audienceSection.classList.add('hidden')
      setTimeout(audienceSection.classList.remove('audience-fadeOut'), 1000)
    }
    // Adds classes to new audience
    if (dataAudience === audience) {
      audienceSection.classList.remove('hidden')
      audienceSection.classList.add('audience-fadeIn')
    }
  })
  localStorage.setItem("audience", audience)
}

select.addEventListener('change', () => switchAudience(select.value))

window.addEventListener('load', () => {
  if (localStorage.getItem("audience") === null) {
    localStorage.setItem("audience", select.value)
  }
  let audience = localStorage.getItem("audience")
  switchAudience(audience)
  select.value = audience
})

// Header Code
// Main Header
const hamburger = document.querySelector('.hamburger')
const expandedNav = document.querySelector('.secondary-navigation')
const menu = document.querySelector('.menu')
const close = document.querySelector('.close-menu')
const body = document.querySelector('body')

hamburger.addEventListener('click', () => {
  expandedNav.classList.toggle("open")
  menu.classList.toggle("open")
  close.classList.toggle("open")
  body.classList.toggle("no-scroll")
})

// Internal Headers
const subNavs = document.querySelectorAll('.secondary-navigation__sub-navs')

subNavs.forEach((subNav) => {
  subNav.addEventListener('click', () => subNav.classList.toggle('open'))
  subNav.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      subNav.classList.toggle('open')
    }
  })
})


// Social Section
const socialItems = document.querySelectorAll('.social-block')
const socialPrevArrow = document.querySelector('.social-prev-arrow')
const socialNextArrow = document.querySelector('.social-next-arrow')

let currentSocial = 0;

// Changes the Socials
const switchSocials = (change) => {
  // For Removing Classes
  let tempSocial = currentSocial
  // Checks if array is at the start or end
  if (currentSocial + change < 0) {
    currentSocial = socialItems.length - 1; 
  } else if (currentSocial + change > socialItems.length - 1) {
    currentSocial = 0;
  } else {
    currentSocial = currentSocial + change
  }
  // Loops through Socials and removes/adds the correct classes
  socialItems.forEach((Social, index) => {
    if (index === currentSocial) {
      Social.classList.remove('hidden')
      Social.classList.remove('Social-fadeOut')
      Social.classList.add('Social-fadeIn')
    } 
    if (index === tempSocial) {
      Social.classList.remove('Social-fadeIn')
      Social.classList.add('Social-fadeOut')
      Social.classList.add('hidden')
    }
  });
}

socialPrevArrow.addEventListener('click', () => switchSocials(-1))
socialNextArrow.addEventListener('click', () => switchSocials(1))
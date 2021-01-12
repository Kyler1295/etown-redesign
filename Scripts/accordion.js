// Variable selection
const accordions = [...document.querySelectorAll('.accordion_wrapper')]
const searchMajors = document.querySelector('#search-majors')
const programTypeRadio = [...document.querySelectorAll('.program-type')]
const areaOfStudyRadio = [...document.querySelectorAll('.area-of-study')]
const undecided = document.querySelector('.undecided')
const searchInput = document.querySelector('#programSearch')
const toggleInput = document.querySelector('.toggleInputs')
const hiddenInput = document.querySelector('.hiddenInputs')

// Gets the radio options selected
const returnRadioOption = (sortedList) => {
  let sortedItem;
  sortedList.forEach((listItem) => {
    if (listItem.checked) {
      sortedItem = listItem.value
    }
  })
  return sortedItem
}

// Sorts through the accordions based off of the program type selected
const sortMajors = (major) => {
  let sortedAccordions = accordions.filter((accordion) => accordion.getAttribute('data-program') !== major)
  return sortedAccordions
}

// Sorts through the accordions based off of the area of study selected
const sortAreas = (area) => {
  let sortedAccordions = accordions.filter((accordion) => accordion.getAttribute('data-study') !== area)
  return sortedAccordions
}

// Resets the radio buttons
const resetPrograms = () => {
  programTypeRadio.forEach((radio) => radio.checked = false)
  areaOfStudyRadio.forEach((radio) => radio.checked = false)
}

// Main Control Function
const filterMajors = () => {
  if (!undecided.checked) {
    let sortTerms = []
    // Sets selected Program Type
    if (returnRadioOption(programTypeRadio) !== undefined) {
      sortTerms.major = returnRadioOption(programTypeRadio)
    }
    
    // Sets selected Area of Study Type
    if (returnRadioOption(areaOfStudyRadio) !== undefined) {
      sortTerms.area = returnRadioOption(areaOfStudyRadio)
    }
    
    // Checkes to see if at least one is checked
    if (sortTerms.major || sortTerms.area) {
      // Resets Accordions To All Show
      accordions.forEach((accordion) => accordion.classList.remove('hidden'))
      let majorsToHide = []
      let areasToHide = []
      // Gets accordions to sort for program
      if (sortTerms.major !== undefined) {
        majorsToHide = sortMajors(sortTerms.major)
      }
      // Gets accordions to sort for area of study
      if (sortTerms.area !== undefined) {
        areasToHide = sortAreas(sortTerms.area)
      }
      // Hides accordions
      majorsToHide.forEach((accordion) => accordion.classList.add('hidden'))
      areasToHide.forEach((accordion) => accordion.classList.add('hidden'))
    }
    resetPrograms()
  } else {
    // TODO: Undecided
  }
}

// Main Control Function for Input
const updateAccordions = () => {
  let currentValue = searchInput.value
  accordions.forEach((accordion) => {
    accordion.getAttribute('data-title').includes(currentValue) ?  accordion.classList.remove('hidden') : accordion.classList.add('hidden')
  })
}

// Main Control for Accordion Toggle
const toggleAccordions = (accordion) => {
  accordion.classList.toggle('open')
}

// Handles the event listener on button submit.
searchMajors.addEventListener('click', filterMajors)

// Handles updating accordions based on input field
searchInput.addEventListener('input', updateAccordions)

// Handles toggling accordions
accordions.forEach((accordion) => {
  accordion.addEventListener('click', () => toggleAccordions(accordion))
})

toggleInput.addEventListener('click', () => hiddenInput.classList.toggle('show'))
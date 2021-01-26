async function fetchPrograms() {
  const response = await fetch('../Scripts/programs.json');
  const programs = await response.json();
  let accordionsWrapper = document.querySelector('.accordions_wrapper')
  let appendedList = '';
  programs.forEach((program) => {
    appendedList += 
  `
  <article class="accordion_wrapper" data-title="${program.title}" data-program="${program.programtype}" data-study="${program.areaofstudy}" tabindex="0">
    <header class="accordion_outer">
      <h2 class="accordion_title">${program.title}<i class="fas fa-arrow-right hover-arrow"></i></h2>
      <p class="accordion_program capitalize">${program.programtypepretty}</p>
      <div class="filterCircle"><i class="fas fa-plus"></i></div>
    </header>
    <main class="accordion_inner">
      <aside class="accordion_meta">
        <div class="program_type">
          <p class="uppercase lightBlue-text">Program Type</p>
          <p class="capitalize">${program.programtypepretty}</p>
          <p>${program.degreetype}</p>
        </div>
        <div class="program_department">
          <p class="uppercase lightBlue-text">Department</p>
          <p class="capitalize">${program.title}</p>
        </div>
      </aside>
      <section class="accordion_main">
        <h4 class="uppercase">${program.title}</h4>
        <p>${program.description}</p>
        <a href="${program.homepagelink}" class="light-blue__button">Learn More<i class="fas fa-arrow-right"></i></a>
        <a href="https://www.etown.edu/apply" class="light-blue__button">Apply Now<i class="fas fa-arrow-right"></i></a>
      </section>
    </main>
  </article>
  `
  })
  accordionsWrapper.innerHTML = appendedList
}

fetchPrograms().then(() => {
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
    let sortedAccordions = accordions.filter((accordion) => {
      if(!accordion.getAttribute('data-program').includes(major)) {
        return accordion
      }
    })
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
      accordion.getAttribute('data-title').includes(currentValue) ? accordion.classList.remove('hidden') : accordion.classList.add('hidden')
    })
  }

  // Main Control for Accordion Toggle
  const toggleAccordions = (accordion) => {
    if (accordion.classList.contains('open')) {
      accordion.classList.toggle('open')
    } else {
      accordions.forEach((accordion) => {accordion.classList.remove('open')})
      accordion.classList.toggle('open')
    }
  }

  // Handles the event listener on button submit.
  searchMajors.addEventListener('click', filterMajors)

  // Handles updating accordions based on input field
  searchInput.addEventListener('input', updateAccordions)

  // Handles toggling accordions
  accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => toggleAccordions(accordion))
  })

  accordions.forEach((accordion) => {
    accordion.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        toggleAccordions(accordion)
      }
    })
  })

  toggleInput.addEventListener('click', () => hiddenInput.classList.toggle('show'))
});
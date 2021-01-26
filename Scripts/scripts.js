// Copyright Code
document.querySelector('.copyright').innerHTML = `&copy; ${new Date().getFullYear()} Elizabethtown College`

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

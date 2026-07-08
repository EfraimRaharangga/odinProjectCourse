import "./styles.css"
import {handleMainPage,activedNav} from "./javascript/handleMainPage.js"
import aboutPage from "./javascript/aboutPage.js"
import homePage from "./javascript/homePage.js"
import menuPage from "./javascript/menuPage.js"
// navbar handle 
const navbarArray = [...document.querySelector('#navbar-content').children]
const navActiveStyle = ['text-primary', 'border-b-2', 'border-primary', 'pb-1']
const navPassiveStyle = ['text-on-surface-variant', 'hover:text-primary', 'transition-colors', 'duration-300']



// first view 
handleMainPage('#content', homePage)
activedNav(navbarArray,0,navActiveStyle,navPassiveStyle)


// home navbar 
navbarArray[0].addEventListener('click', (e) => {
    e.preventDefault()
    handleMainPage('#content', homePage)
    activedNav(navbarArray,0,navActiveStyle,navPassiveStyle)
    
})

// menu navbar 
navbarArray[1].addEventListener('click', (e) => {
    e.preventDefault()
    handleMainPage('#content', menuPage)
    activedNav(navbarArray,1,navActiveStyle,navPassiveStyle)
})

// abut navbar 
navbarArray[2].addEventListener('click', (e) => {
    e.preventDefault()
    handleMainPage('#content', aboutPage)
    activedNav(navbarArray,2,navActiveStyle,navPassiveStyle)
})
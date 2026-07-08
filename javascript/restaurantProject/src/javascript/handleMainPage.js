function handleMainPage(idOfPage, content) {
    const element = document.querySelector(idOfPage)
    element.innerHTML = content
}

function activedNav(navArray, index, navActiveClass, navPassiveClass) {
    // make all of nav same style 
    navArray.forEach(element => {
        element.classList.remove(...navActiveClass)
        element.classList.add(...navPassiveClass)
    });


    // change the main nav 
    navArray[index].classList.remove(...navPassiveClass)
    navArray[index].classList.add(...navActiveClass)
}

export { handleMainPage, activedNav }
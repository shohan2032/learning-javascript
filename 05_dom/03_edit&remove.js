//edit
const secondLan = document.querySelector("li:nth-child(2)")
// secondLan.innerHTML = "cpp"
const newLi = document.createElement('li')
newLi.textContent = "C++"
secondLan.replaceWith(newLi)

const firstLan = document.querySelector("li:first-child")
firstLan.outerHTML = "<li>Typescript</li>"

// remove
const lastLan = document.querySelector("li:last-child")
lastLan.remove()
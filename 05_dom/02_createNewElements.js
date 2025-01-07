// create a new element in DOM
const div = document.createElement('div')
console.log(div)
div.className = "main"
div.id = Math.round(Math.random() * 10 + 1)
div.setAttribute('title', 'This is a title')
div.style.backgroundColor = 'green'
div.style.color = 'black'
// div.innerText = "Shohan" --> innerText catch the text then overwrite the text
const addText = document.createTextNode('Shohan') // createTextNode directly overwrite the text
div.appendChild(addText)
document.body.appendChild(div)
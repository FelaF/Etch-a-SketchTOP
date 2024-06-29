const container = document.querySelector("#container")
console.dir(container.firstElementChild);
const controls = document.querySelector(".controls")
console.dir(controls.previousElementSibling)

const div = document.createElement("div")
const para = document.createElement("p")
const para2 = document.createElement("p")
const heade = document.createElement("h3")
const heade1 = document.createElement("h1")
const div2 = document.createElement("div")

para.textContent = "Hey I'm red!"
para.style.cssText = "color: red"

para2.textContent = "ME TOO!"
heade.textContent = "I'm a blue h3!"
heade.style.cssText = "color: blue"
div2.setAttribute("style", "border-color: black; background-color:pink;")
heade1.textContent = "I'm in a div"

// adds the indicated style rule to the element in the div variable
div.style.color = "blue";

// adds several style rules
div.style.cssText = "color: blue; background: white;";

// adds several style rules
div.setAttribute("style", "color: blue; background: white;");

div.textContent = "Hello World!";

div.classList.add("theDiv")
container.appendChild(div)
container.appendChild(para)
container.appendChild(heade)
div2.appendChild(heade1)
div2.appendChild(para2)
container.appendChild(div2)


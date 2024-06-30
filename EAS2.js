const container = document.querySelector("#container");
const Divs = document.querySelectorAll("#container");
const button = document.querySelector("#Input")


function divIODiv(x){
    LastValue = x
    for(let i = 0; i < x; i++){
        const div = document.createElement("div");
        div.setAttribute("id", "Primary")
        container.appendChild(div)
        for (let j = 0; j < x; ++j){
            const secondarydiv = document.createElement("div");
            secondarydiv.setAttribute("class", "Secondary")
            secondarydiv.textContent = i;
            div.appendChild(secondarydiv)
        };
      };
    };

divIODiv(8)
container.innerHTML = ""
divIODiv(12)
container.removeAllChildren;
function setFlex(){
    container.style.display = "flex";
}
setFlex()

function Hovering(){
    console.log("Hovering")
}

let SingularNodes = document.querySelectorAll("#container > div > div")
SingularNodes.forEach((div) => {
    div.addEventListener("mouseover", ()=> {
        console.log(`The mouse went over ${ div.className}`)
        div.style.background = "blue"
    });
});

function Prompt(){
    input = prompt("What is the new size of grid? (up to 100)")
    container.innerHTML = ""
    divIODiv(input)
}
button.addEventListener("click", Prompt);

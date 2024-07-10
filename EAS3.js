const container = document.querySelector("#container");
const Divs = document.querySelectorAll("#container");
const button = document.querySelector("#Input")
const SD = document.querySelector("div.Secondary")


function divIODiv(x){
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
      container.style.width = "960px"
      container.style.height = "960px"
    };

function setPanelSize(){
    SD.style.width = "30px"
    SD.style.height = "40px"
    SD.style.background = "red"
}
function setFlex(){
    container.style.display = "flex";
    container.style.flex.direction = ""
}
setFlex()

function reactivateNodes(inputsize){
    x = 960/inputsize
    let SingularNodes = document.querySelectorAll("#container > div > div")
    SingularNodes.forEach((div) => {
        div.style.height = `${x}px`;
        div.style.width = `${x}px`
        div.addEventListener("mouseover", ()=> {
            console.log(`The mouse went over ${ div.className}`)
            div.style.background = "blue";

    });
})};

function Prompt(){
    input = prompt("What is the new size of grid? (up to 100)")
    container.innerHTML = ""
    divIODiv(input)
    reactivateNodes(input)
}
button.addEventListener("click", Prompt);


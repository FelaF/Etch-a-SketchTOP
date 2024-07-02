const container = document.querySelector("#container");
const Divs = document.querySelectorAll("#container");
const button = document.querySelector("#Input")


function divIODiv(x){
    for(let i = 0; i < x; i++){
        const div = document.createElement("div");
        Cellsize = 960/x
        div.setAttribute("id", "Primary")
        container.appendChild(div)
        div.style.height = Cellsize
        for (let j = 0; j < x; ++j){
            const secondarydiv = document.createElement("div");
            secondarydiv.setAttribute("class", "Secondary")
            secondarydiv.style.width = Cellsize
            console.log(Cellsize)
            secondarydiv.style.height = Cellsize
            secondarydiv.textContent = i
            div.appendChild(secondarydiv)
        };
      };
      container.style.width = "960px"
      container.style.height = "960px"
    };


reactivateNodes()
function setFlex(){
    container.style.display = "flex";
}
setFlex()

function Hovering(){
    console.log("Hovering")
}
function reactivateNodes(){
    let SingularNodes = document.querySelectorAll("#container > div > div")
    SingularNodes.forEach((div) => {
        div.addEventListener("mouseover", ()=> {
            console.log(`The mouse went over ${ div.className}`)
            div.style.background = "blue"

    });
})};

function Prompt(){
    input = prompt("What is the new size of grid? (up to 100)")
    container.innerHTML = ""
    divIODiv(input)
    reactivateNodes()
}
button.addEventListener("click", Prompt);


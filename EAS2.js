const container = document.querySelector("#container");
const Divs = document.querySelectorAll("#container");
const button = document.querySelector("#Input")


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
    };

divIODiv(8)
function setFlex(){
    container.style.display = "flex";
}
setFlex()


let SingularNodes = document.querySelectorAll("#container > div > div")
SingularNodes.forEach((div) => {
    div.addEventListener("mouseover", ()=> {
        console.log(`The mouse went over ${ div.className}`)
        div.style.background = "blue"
    });
});

function Promption(){
    input = Number(prompt("What is the new size of grid? (up to 100)"))
    container.textContent = ""
    divIODiv(inp)
}

const Primary = document.querySelector("#Primary")
const Secondary = document.querySelector(".Secondary")
const garbage = Primary.removeChild(Secondary)
SecondaryNodes = Primary.children
console.log(garbage)
const garbage1 = Primary.removeChild(SecondaryNodes)
button.addEventListener("click", Promption);

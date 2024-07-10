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
      container.style.display = "flex"
      container.style.height = 960
      container.style.width = 960
    };

divIODiv(8)
Input = prompt("What is the gridsize?")


let SingularNodes = document.querySelectorAll("#container > div > div")

SingularNodes.forEach((secondarydiv) => {
    secondarydiv.addEventListener("mouseover", ()=> {
        console.log(`The mouse went over ${ secondarydiv.className}`)
       secondarydiv.style.background = "blue"
    });
});

function reactivateNodes(){
    Nodes = document.querySelectorAll("#Container > div")
    Divsize = 960/x;
    console.log(Divsize)
    secondarydiv.style.height = "Divsize%"
    secondarydiv.style.width = "Divsize%"
    Nodetion = container.removeChild(Nodes)
}
reactivateNodes()
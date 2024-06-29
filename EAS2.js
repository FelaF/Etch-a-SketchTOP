const container = document.querySelector("#container")
const Divs = document.querySelectorAll("#container")



function divIODiv(x){
    for(let i = 0; i < x; i++){
        const div = document.createElement("div");
        div.setAttribute("id", i)
        div.textContent = i;
        container.appendChild(div)
        for (let j = 1; j < x+1; ++j){
            const secondarydiv = document.createElement("div");
            secondarydiv.classList.add("Secondary")
            secondarydiv.textContent = i;
            div.appendChild(secondarydiv)
        };
        
      };
    };

divIODiv(8)

function setFlex(){
    container.style.display = "flex";
    container.style.color = "blue";
}
setFlex()

Divs.forEach((div) => {
    div.addEventListener("mouseover", ()=> {
        console.log(div.id)
    });
});



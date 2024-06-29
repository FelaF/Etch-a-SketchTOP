 const container = document.querySelector("#container")



function divIODiv(x){
    for(let i = 0; i < x; i++){
        const div = document.createElement("div");
        div.setAttribute("id", i)
        div.textContent = i;
        container.appendChild(div)
        for (let j = 1; j < x; ++j){
            const secondarydiv = document.createElement("div");
            secondarydiv.classList = ("Secondary")
            secondarydiv.textContent = i;
            div.appendChild(secondarydiv)
        };
        
      };
    };

divIODiv(8)

function setFlex(){
    container.style.color = "blue";
    container.style.display = "flex";
}
setFlex()
container.addEventListener("mouseover", ()=>{
    console.log("mouse went over container")
    container.style.color = "red";
})
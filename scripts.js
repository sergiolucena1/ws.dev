function onOff(){
    document
    .querySelector("#modal")
    .classList // acessar a lista de classes 
    .toggle("hide") // alternancia 

    document
    .querySelector("body")
    .classList // acessar a lista de classes 
    .toggle("hideScroll") // alternancia (tirar e botar)

    document // um scroll so no modal 
    .querySelector("#modal")
    .classList
    .toggle("addScroll")

}



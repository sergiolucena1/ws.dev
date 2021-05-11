function onOff(){
    document
    .querySelector("#modal") // dentro do documento procurar modal
    .classList // acessar a lista de classes 
    .toggle("hide") // alternancia 

    document // tirando o scroll
    .querySelector("body")
    .classList // acessar a lista de classes 
    .toggle("hideScroll") // alternancia (tirar e botar) escondendo o scroll

    document // um scroll so no modal 
    .querySelector("#modal")
    .classList
    .toggle("addScroll") //  add o scrll

}



document
    .querySelector("button.fat")
    .addEventListener("click", function () {
        document
            .querySelector("#footer")
            .classList // propriedade 
            .toggle("hide") // toggle = colocar e tirar a classe
    })
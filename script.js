const [input1, input2] = document.querySelectorAll(".form-login")
const botao = document.querySelector("button");

function mudanca(){

    if(input1.value === "e" && input2.value.length >= 8){

        botao.removeAttribute("disabled");
       

    }else{
        botao.setAttribute("disabled", "disabled");
       
    }

}

// Metodo -> Adicionamos um Evento

input1.addEventListener(".form-login", mudanca);
input2.addEventListener(".form-login", mudanca);
botao.addEventListener("botao", mudanca);
    
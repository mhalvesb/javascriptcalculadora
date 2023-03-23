let botoes = document.querySelectorAll(".botao");
let modo = document.querySelector(".mode");
let value = document.querySelector(".value");
let classes = document.querySelectorAll(".num");
let valor = 0;
let simbolo = "";
let isLight = document.querySelectorAll("div");


modo.addEventListener("click", () =>{
    modes();
})
function modes(){
    for(i = 0; i < isLight.length; i++){
        if(isLight[i].classList.contains("light")){
            isLight[i].classList.remove("light");
            modo.innerText = "Modo escuro";
            modo.style.backgroundColor = "black";
            modo.style.color = "white";
        } else{
            modo.innerText = "Modo claro";
            modo.style.backgroundColor = "white";
            modo.style.color = "black";
            isLight[i].classList.add("light");
        }
    }

}




function calcular(calculo){


        if(simbolo === "+"){
            valor += calculo;
        } else if (simbolo === "-"){
            valor -= calculo;
        } else if (simbolo === "*"){
            valor *= calculo;
        } else if (simbolo === "/"){
            valor /= calculo;
        }
    return value.innerHTML = valor;
}

classes[0].addEventListener("click", ()=>{
    simbolo = "+";
})
classes[1].addEventListener("click", ()=>{
    simbolo = "-";
})

classes[2].addEventListener("click", ()=>{
    simbolo = "*";
})

classes[3].addEventListener("click", ()=>{
    simbolo = "/";
})

classes[4].addEventListener("click", () =>{
    valor = 0;
    calcular(0);
})



botoes[0].addEventListener("click", () =>{
    calcular(1);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});
botoes[1].addEventListener("click", () =>{
    calcular(2);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});

botoes[2].addEventListener("click", () =>{
    calcular(3);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});

botoes[3].addEventListener("click", () =>{
    calcular(4);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});

botoes[4].addEventListener("click", () =>{
    calcular(5);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});

botoes[5].addEventListener("click", () =>{
    calcular(6);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});

botoes[6].addEventListener("click", () =>{
    calcular(7);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});

botoes[7].addEventListener("click", () =>{
    calcular(8);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});
botoes[8].addEventListener("click", () =>{
    calcular(9);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});
botoes[9].addEventListener("click", () =>{
    calcular(10);
    if(simbolo === ""){
        alert("Você deve selecionar algum simbolo");
    }
});


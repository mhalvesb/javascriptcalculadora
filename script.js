


let valor = 0;

let soma = document.querySelector(".soma");
soma.addEventListener("click", ()=>{
    somar();
})
function somar(){
    alterarvalor();
}



let botao1 = document.querySelector(".botao1");
botao1.addEventListener("click", () =>{
    somar1();
})

function somar1(){
    valor = valor + 1;
    
    console.log(`Adicionado mais 1`);
    return valor;
}

let botao2 = document.querySelector(".botao2");
botao2.addEventListener("click", () =>{
    somar2();
})

function somar2(){
    valor = valor + 2;
    
    console.log(`Adicionado mais 2`);
    return valor;
}

let botao3 = document.querySelector(".botao3");
botao3.addEventListener("click", () =>{
    somar3();
})

function somar3(){
    valor = valor + 3;
    console.log(`Adicionado mais 3`);
    return valor;
}


let botao4 = document.querySelector(".botao4")
    botao4.addEventListener("click", () =>{

    })

    function somar4(){
        valor = valor + 4;
        return valor;
    }

    let botao5 = document.querySelector(".botao5");
    botao5.addEventListener("click", () =>{
        somar5();
    })

    function somar5(){
        valor = valor + 5;
        return valor;
    }

    let botao6 = document.querySelector(".botao6");
    botao6.addEventListener("click", () =>{
        somar6();
    })

    function somar6(){
        valor = valor + 6;
        return valor;
    }

    let botao7 = document.querySelector(".botao7");
    botao7.addEventListener("click", () =>{
        somar7();
    })

    function somar7(){
        valor = valor + 7;
        return valor;
    }

    let botao8 = document.querySelector(".botao8");
    botao8.addEventListener("click", () =>{
        somar8();
    })

    function somar8(){
        valor = valor + 8;
        return valor;
    }

    let botao9 = document.querySelector(".botao9");
    botao9.addEventListener("click", () =>{
        valor = valor + 9;
        return valor;
    })


    let botao10 = document.querySelector(".botao10");
    botao10.addEventListener("click", () =>{
        valor = valor + 10;
        return valor;
    })





function alterarvalor(){
    const number = document.querySelector(".value");
    number.innerHTML = valor;
}

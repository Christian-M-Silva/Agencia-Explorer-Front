if (document.title === "Destinos"){
    const btn = document.querySelector("#consultar");
    let ticket = document.querySelector(".display-check");
    btn.addEventListener("click", function(e){
        e.preventDefault();
        ticket.style.display = 'flex';
    })

    let getorigem = document.getElementsByName('getorigem')[0];
        getorigem.addEventListener('input', function(e){
            e.preventDefault();
            document.getElementById("result1").innerHTML=this.value;
    })
    let getdestino = document.getElementsByName('getdestino')[0];
        getdestino.addEventListener('input', function(e){
            e.preventDefault();
            document.getElementById("result2").innerHTML=this.value;
    })
    let dataEmbarque = document.querySelector(".date-embarque");
        dataEmbarque.addEventListener('input', function(e){
            e.preventDefault();
            document.getElementById("result3").innerHTML=this.value;
    })
    let dataRetorno = document.querySelector(".date-retorno");
        dataRetorno.addEventListener('input', function(e){
            e.preventDefault();
            document.getElementById("result4").innerHTML=this.value;
    })
}
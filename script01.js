var botao = document.getElementById('botao')
botao.addEventListener("click", ()=>{

    var usuario = document.getElementById("username").value;
    var senha = document.getElementById("password").value;
    if (username=="" && password== ""){
        document.getElementById ("alerta").innerHTML= "Usuário e/ou Senha estão inválidos. "

    } else{
        document.getElementById("alerta").innerHTML = "Você será direcionado para nossa página "
    }
})
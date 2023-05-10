const express = require("express"); //importa o modulo express neste arquivo
const app = express(); //inicializa o express

//criando a rota inicial
app.get("/", function(req,res){
    res.send("<h1>Bem-vindo ao site</h1>");
})

//criando a rota de cadastro de produtos
app.get("/produtos", function(req,res){
    res.send("<h1>Lista de Produtos!</h1>")
})

//criando rota com parametro
app.get("/consulta/:parametro", function(req,res){
    //req = requisição -> dados enviados pelo cliente
    //res = response -> resposta enviada pelo servidor
    res.send("retorno consulta: " + req.params.parametro);
})

//criando rota com parametro opcional
app.get("/cadastro/:nome?", function(req,res){
    var nome = req.params.nome
    if(nome){
        res.send("<h1>Produto " + nome + " criado!</h1>");
    } else{
        res.send("produto criado!")
    }
})

//cria a aplicação na porta 3000
app.listen(process.env.PORT ?? 3000, function(erro){
    if(erro){
        console.log("Erro ao iniciar");
    } else{
        console.log("Servidor iniciado")
    }
})

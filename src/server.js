//Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

//configuração do nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//recebe os dados do req.body
.use(express.urlencoded({extended: true}))
//Configuração de arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500) //start do servidor
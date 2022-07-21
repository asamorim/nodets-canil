import express from "express";
import dotenv from "dotenv";
import mustache from "mustache-express";
import path from "path";
import mainRoutes from './routes/index';


// configurando porta no .env
dotenv.config();

//servidor
const server = express();

server.set('view engine', 'mustache')
// setando o caminho da pasta das views
server.set('views', path.join(__dirname,'views'));
// rodando e funcao para mostra as views na tela
server.engine('mustache', mustache());


//chamando pasta public (arquivos estaticos)

server.use(express.static(path.join(__dirname,'../public')));

// adicioando as rotas

server.use(mainRoutes);


//pagina nao encontrada

server.use((req, res)=>{
    res.send('pagina nao encontrada!');
});

//executando servidor
server.listen(process.env.PORT);


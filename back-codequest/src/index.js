const bd = require('./core/bd.js');
const rotas = require('./core/rotas.js');

function middleWareGlobal(req, res, next) {
    console.time('Duração');
    console.log('Iniciou o processamento da requisição '+req.method+' em '+req.url);

    next();

    console.log('Terminou o processamento da requisição '+req.method+' em '+req.url);
    console.timeEnd('Duração');    
}

async function ativacaoDoServidor() {
    const ret = await bd.estrutureSe();
    
    if(ret === null) {
        console.log('Não foi possível estabelecer conexão com o BD!');
        process.exit(1);
    }

    if(ret === false) {
        console.log('Não foi possível estruturar o BD!');
        process.exit(1);
    }

    const express = require('express');
    const app = express();

    app.use(express.json());
    app.use(middleWareGlobal);

    app.post('/emails', rotas.inclusao);
    app.put('/emails/:id', rotas.atualizacao);
    app.delete('/emails/:id', rotas.remocao);
    app.get('/emails/:id', rotas.recuperacaoDeUm);
    app.get('/emails', rotas.recuperacaoDeTodos);

    app.listen(3306, () => {
        console.log('Servidor ativo na porta 3306...');
    });
}
ativacaoDoServidor();
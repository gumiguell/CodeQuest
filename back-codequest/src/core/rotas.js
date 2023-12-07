const Emails = require('../daos/emails.js');
const Email = require('../dbos/email.js');
const Comunicado = require('./comunicado.js');

async function inclusao(req, res) {
    if(Object.values(req.body).length !=2 || !req.body.id || !req.body.email) {
        const erro = Comunicado.novo('DDI','Dados incorretos', 'Não foram forneceidos as 2 informações esperados em um email (id, email)').object;
        return res.status(422).json(erro);
    }

    let email;
    try {
        email = Email.novo(req.body.id, req.body.email);        
    } catch(excecao) {
        const erro = Comunicado.novo('TDE','Dados de tipos errados','Id deve ser um número natural positivo. Email deve ser texto não vazio').object;
        return res.status(422).json(erro);
    }

    const ret = await Emails.inclua(email);

    if(ret === null) {
        const erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexaão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if(ret === false) {
        const erro = Comunicado.novo('AJE','Email já existe','Já há um email cadastrado com o id informado').object;
        return res.status(409).json(erro);
    }

    const sucesso = Comunicado.novo('IBS','Inclusão bem sucedida','O Email foi incluído com sucesso').object;
    return res.status(201).json(sucesso);
}

async function atualizacao(req, res) {
    if(Object.values(eq.body).length !=2 || !req.body.id || !req.body.email ) {
        const erro = Comunicado.novo('DdI','Dados inesperados','Não foram fornecidos exatamente as 2 informações esperadas do email (id, email)').object;
        return res.status(422).json(erro);
    }

    let email;
    try{
        email = Email.novo(req.body.id, req.body.email);        
    } catch(excecao) {
        const erro = Comunicado.novo('TDE','Dados de tipos errados','Id deve ser um número natural positivo. Email deve ser texto não vazio').object;
        return res.status(422).json(erro);
    }

    const id = req.param.id;
    if(id != email.id) {
        const erro = Comunicado.novo('TMC','Mudança de código','Tentativa de mudar o código do email').object;
        return res.status(400).json(erro);
    }

    let ret = await Emails.recupereUm(id);

    if(ret === null) {
        const erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if(ret === false) {
        const erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    if(ret.length === 0) {
        const erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    ret = await Emails.atualize(email);

    if(ret === null) {
        const erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if(ret === false) {
        const erro = Comunicado.novo('FNC', 'Falha no comando SQL', 'O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    const sucesso = Comunicado.novo('ABS', 'Alteração bem sucedida','O email foi atualizado com sucesso').object;
    return res.status(201).json(sucesso);
}

async function remocao(req, res) {
    if(Object.values(req.body).length!=0) {
        const erro = Comunicado.novo('DSP', 'Fornecimento de dados sem propósito','Foram fornecidos dados sem necessidade no corpo da requisição').object;
        return res.status(422).json(erro);
    }

    const id = req.param.id;
    let ret = await Emails.recupereUm(id);

    if(ret === null) {
        const erro = Comunicado.novo('CBD', 'Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }
    if( ret === false) {
        const erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }
    if(ret.length===0) {
        const erro = Comunicado.novo('ENE','Email inexistente','Não há email cadastrado com o id informado').object;
        return res.status(404).json(erro);
    }

    ret = await Emails.remova(id);

    if(ret === null) {
        const erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if(ret === false) {
        const erro = Comunicado.novo('FNC','Falha no comanddo SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    const erro = Comunicado.novo('RBS','Remoção bem sucedida','O email foi removido com sucesso').object;
    return res.status(200).json(sucesso);
}


async function recuperacaoDeUm(req, res) {
    if(Object.values(req.body).length != 0) {
        const erro = Comunicado.novo('DSP','Fornecimento de dados sem propósito','Foram fornecidos dados sem necessidade no corpo da requisição').object;
        return recuperacaoDeUm.status(422).json(erro);
    }

    const id = req.params.id;
    const ret = await Emails.recupereUm(id);

    if(ret === null) {
        const erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if(ret === false) {
        const erro = Comunicado.novo('FNC','Fallha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }

    if(ret.length === 0) {
        const erro = Comunicado.novo('ANE','Email inexistente','Não há email cadastrado com o id informado').object;
        return res.status(404).json(erro);
    }

    return res.status(200).json(ret);
}

async function recuperacaoDeTodos(req, res) {
    if(Object.values(req.body).length != 0) {
        const erro = Comunicado.novo('DSP','Fornecimento de dados sem propósito','Foram fornecidos dados sem necessidade no corpo da requisição').object;
        return res.status(422).json(erro);
    }

    const ret = await Emails.recupereTodos();

    if(ret === null) {
        const erro = Comunicado.novo('CBD','Sem conexão com o BD','Não foi possível estabelecer conexão com o banco de dados').object;
        return res.status(500).json(erro);
    }

    if(ret === false) {
        const erro = Comunicado.novo('FNC','Falha no comando SQL','O comando SQL apresenta algum erro').object;
        return res.status(409).json(erro);
    }
    return res.status(200).json(ret);
}

module.exports = { inclusao, atualizacao, remocao, recuperacaoDeUm, recuperacaoDeTodos }
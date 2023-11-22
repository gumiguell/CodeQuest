const bd = require('../core/bd.js');

async function inclua(email) {

    const conexao = await bd.getConexao();
    
    if(conexao == null) return null;
    
    try {
        const sql = 'INSERT INTO emails (id, email) VALUES (?,?)';
        const dados = [email.id, email.email];
        await conexao.query(sql, dados);
        return true;
    } catch(excecao) {
        return false;
    }    
}

async function atualize(email) {
    const conexao = await bd.getConexao();
    if(conexao == null) 
        return null;
    
    try {
        const sql = 'UPDATE email SET email=? WHERE id=?';
        const dados = [email.email, email.id];
        await conexao.query(sql, dados);
        return true;
    } catch (excecao) {
        return false;
    }
}

async function remova(id) {
    const conexao = await bd.getConexao();
    if(conexao == null)
        return null;
    
    try {
        const sql = 'DELETE FROM emails WHERE id=?';
        const dados = [id];
        await conexao.query(sql, dados);
        return true;
    } catch(exececao) {
        return false;
    }
}

async function recupereUm(id) {
    const conexao = await bd.getConexao();
    if(conexao == null)
        return null;
    
    try {
        const sql = 'SELECT * FROM emails WHERE id=?';
        const dados = [id];
        const [linhas] = await conexao.execute(sql, dados);
        await conexao.query(sql, dados);
        return linhas;
    } catch(excecao) {
        return false;
    }    
}

async function recupereTodos() {
    const conexao = await bd.getConexao();
    if(conexao == null)
        return null;

    try {
        const sql = 'SELECT * FROM emails';
        const [linhas] = await conexao.query(sql);
        return linhas;
    } catch(excecao) {
        return false;
    }
}

module.exports = { inclua, atualize, remova, recupereUm, recupereTodos}
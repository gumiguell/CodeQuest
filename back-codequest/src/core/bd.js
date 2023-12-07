const mysql = require("mysql2/promise");
const bdconfig = require('./bdconfig.js');

async function getConexao() {
    if (global.conexao && global.conexao.state !== 'disconnected')
        return global.conexao;
        
    
    try {
        const conexao = await mysql.createConnection (bdconfig);
        global.conexao = conexao;
        return conexao;
    } catch(erro) {
        return null;
    }
}

async function estrutureSe() {
    const conexao = await getConexao ();
    if(conexao == undefined) return null;

    const sql = 'CREATE TABLE IF NOT EXISTS emails (id TINYINT UNSIGNED, email VARCHAR(256) NOT NULL, PRIMARY KEY (id))';

    try {
        await conexao.query (sql);
        return true;
    }
    catch(erro) {
        return false;
    }
}
module.exports = {getConexao, estrutureSe};


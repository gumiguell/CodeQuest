class Email {
    #id
    #email

    constructor(id, email) {
        this.id = id;
        this.email = email;
    }

    get id () { return this.id; }

    get email () { return this.#email; }

    set id (id) {
        if(id === undefined || typeof id !== 'number' || isNaN(id) || id !== parseInt(id) || id <= 0)
            throw ('Id inválido');
        
        this.#id = id;
    }

    set email (email) {
        if(email === undefined || typeof email !== 'string' || email === "")
            throw ('Email inválido');
        
        this.#email = email;
    }
}

function novo (id, email) { return new Email (id, email); }

module.exports = {novo};
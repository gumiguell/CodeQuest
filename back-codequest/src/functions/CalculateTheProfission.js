/* o intuito dessa classe é fazer o calculo das respostas do usuário com o seu eneagrama, então ela vai percorrer as questões, que ao todo são 45
    cada questão é referente aos nove tipos de personalidade, ou seja 5 questões para 1 tipo de personalidade, e cada
    questão tem ao todo 5 alternativas, essas alternativas vai de 0 a 5.
*/
class CalculateTheJob {
    #formAnswers
    
    constructor(formAnswers) {
        this.#formAnswers = formAnswers;
    }
    
    get formAnswers() { return this.#formAnswers }
    
    set formAnswers(formAnswers) {
        const ENNEAGRAM_QUESTIONS_QUANTITY = 25;
        if(formAnswers === undefined) throw ('Missing Questionnarie');
        if(formAnswers.length !== ENNEAGRAM_QUESTIONS_QUANTITY) throw ('Any alternative is null');
        for(let line = 0; line < ENNEAGRAM_QUESTIONS_QUANTITY; line++) {           
            if(typeof formAnswers[line] !== Number ||
                isNaN(formAnswers[line]) ||
                formAnswers[line] !== parseInt(formAnswers[line] ||
                formAnswers[line] <= 0 || formAnswers[line] > 5)) 
                    throw('Entering invalid data');
            this.#formAnswers[line] = formAnswers[line];            
        }
    }

}
function calculateJob(formAnswers){
    formAnswers = new CalculateTheJob(formAnswers);
    const ENNEAGRAM_QUESTIONS_QUANTITY = 45;
    let sumType1;
    let sumType2;
    let sumType3;
    let sumType4;
    let sumType5;    
    let resp;
    for(let line = 0; line < ENNEAGRAM_QUESTIONS_QUANTITY; line++) {
        if(line < 5) {
            sumType1 += this.formAnswers[line];
        }
        if(line >= 5 && line < 10) {
            sumType2 += this.formAnswers[line];
        }
        if(line >= 10 && line < 15) {
            sumType3 += this.formAnswers[line];
        }
        if(line >= 15 && line < 20) {
            sumType4 += this.formAnswers[line];
        }
        if(line >= 20 && line < 25) {
            sumType5 += this.formAnswers[line];
        }       
    }
    if(sumType1 >= 15) resp[0] = sumType1;
    if(sumType2 >= 15) resp[1] = sumType2;
    if(sumType3 >= 15) resp[2] = sumType3;
    if(sumType4 >= 15) resp[3] = sumType4;
    if(sumType5 >= 15) resp[4] = sumType5;    

    return resp;
}

module.exports = { calculateJob };
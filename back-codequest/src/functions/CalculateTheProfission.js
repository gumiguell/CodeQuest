/* o intuito dessa classe é fazer o calculo das respostas do usuário com o seu eneagrama, então ela vai percorrer as questões, que ao todo são 45
    cada questão é referente aos nove tipos de personalidade, ou seja 5 questões para 1 tipo de personalidade, e cada
    questão tem ao todo 5 alternativas, essas alternativas vai de 0 a 5.
*/
class CalculateTheJob {
    #formAnswers
    
    constructor(formAnswers) {
        this.formAnswers = formAnswers;
    }
    
    get formAnswers() { return this.#formAnswers }
    
    set formAnswers(formAnswers) {
        const EXPECTED_ANSWERS = 20;
        if(formAnswers === undefined) throw ('Missing Questionnarie');
        if(formAnswers.length !== EXPECTED_ANSWERS) throw ('Any alternative is null');
        this.#formAnswers = []; 
        for(let line = 0; line < EXPECTED_ANSWERS; line++) {           
            if(typeof formAnswers[line] !== 'number' || // Corrected 'Number' to 'number'
                isNaN(formAnswers[line]) ||
                formAnswers[line] !== parseInt(formAnswers[line]) || // Corrected logical OR error
                formAnswers[line] <= 0 || formAnswers[line] > 5) 
                    throw('Entering invalid data');
            this.#formAnswers[line] = formAnswers[line];            
        }
    }

}
function calculateJob(formAnswers){
    const jobCalculator = new CalculateTheJob(formAnswers); // Create instance
    const QUESTIONS_TO_PROCESS = 20; // Define number of questions to process
    let sumType1 = 0; // Initialize sumType1
    let sumType2 = 0; // Initialize sumType2
    let sumType3 = 0; // Initialize sumType3
    let sumType4 = 0; // Initialize sumType4
    let sumType5 = 0; // Initialize sumType5
    let resp = []; // Initialize resp
    for(let line = 0; line < QUESTIONS_TO_PROCESS; line++) { // Loop through questions to process
        if(line < 4) { // Questions 0-3 for sumType1
            sumType1 += jobCalculator.formAnswers[line]; // Access answers from instance
        }
        if(line >= 4 && line < 8) { // Questions 4-7 for sumType2
            sumType2 += jobCalculator.formAnswers[line]; // Access answers from instance
        }
        if(line >= 8 && line < 12) { // Questions 8-11 for sumType3
            sumType3 += jobCalculator.formAnswers[line]; // Access answers from instance
        }
        if(line >= 12 && line < 16) { // Questions 12-15 for sumType4
            sumType4 += jobCalculator.formAnswers[line]; // Access answers from instance
        }
        if(line >= 16 && line < 20) { // Questions 16-19 for sumType5
            sumType5 += jobCalculator.formAnswers[line]; // Access answers from instance
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
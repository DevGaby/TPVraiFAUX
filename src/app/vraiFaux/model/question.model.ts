export class Question {
    question: string ='';
    response: string = '';
    level: string = "";
    category: string = ""
    controlResponse: boolean ;

    constructor( question: string, response: string, level: string, category : string, checkResponse: boolean) {
        this.question = question;
        this.response = response;
        this.level = level;
        this.category = category;
        this.controlResponse = checkResponse;
    }
}
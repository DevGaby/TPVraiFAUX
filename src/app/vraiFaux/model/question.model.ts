export class Question {
    question: string ='';
    response: string = '';
    level: string = "";
    theme: string = ""
    controlResponse: boolean ;

    constructor( question: string, response: string, level: string, theme : string, checkResponse: boolean) {
        this.question = question;
        this.response = response;
        this.level = level;
        this.theme = theme;
        this.controlResponse = checkResponse;
    }
}
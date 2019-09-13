import { Component, Output, EventEmitter } from "@angular/core";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { Question } from "../model/question.model";
import { VraiFauxService } from "../service/vraifaux.service";



@Component({
    selector: "add-question",
    templateUrl: './add-question.component.html'
})


export class AddQuestionComponent {
    public newQuestion : Question = new Question("","","","",true)
    public log: string = "";
    public levels : any [] = [];
    public categories : any [] = [];

    @Output() questionAdded: EventEmitter<any> = new EventEmitter();
    //////\\\\\/////\\\\\\
  
   //////\\\\\/////\\\\\\

    constructor(private rest: VraiFauxService ) { }

    getLevels(){
        this.levels  = this.rest.GetLevels();
    }

    getCategories() {
        this.categories = this.rest.GetCategories();
    }
    addQuestion() {
        console.log(this.newQuestion);
        // Notification => 
        this.questionAdded.emit(this.newQuestion);

        // this.rest.SetQuestion(this.newQuestion);
        this.log = "Nouvelle question : " + this.newQuestion.question + "Reponse: " + this.newQuestion.response;
    }

    check(choice){
        this.newQuestion.controlResponse = choice;
    }

    level(){
        this.levels = this.rest.GetLevels();
        var levelName = [] ;
        this.levels.forEach(function(element) {
            levelName.push(element.label);
          });

        dialogs.action({
            message: "Choissisez un niveau",
            actions: levelName
        }).then(result => {
            return this.newQuestion.level = result;
        });
    }

    category() {
        this.categories = this.rest.GetCategories();
        var categoryName = [] ;
        this.categories.forEach(function(element) {
            categoryName.push(element.label);
          });

        dialogs.action({
            message: "Choissisez une catégorie",
            actions: categoryName
        }).then(result => {
            return this.newQuestion.category = result;
        });

    }
////////////////
   
}
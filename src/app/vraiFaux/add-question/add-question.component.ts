import { Component } from "@angular/core";
import { Question } from "../model/question.model";
import { VraiFauxService } from "../service/vraifaux.service";
import {ListPicker } from "tns-core-modules/ui/list-picker";


@Component({
    selector: "add-question",
    templateUrl: './add-question.component.html'
})


export class AddQuestionComponent {
    public newQuestion : Question = new Question("","","","",true)
    public log: string = "";
    public levels : any [] = [];
    public categories : any [] = [];

    //////\\\\\/////\\\\\\
    public pokemons: Array<string>;
    public index: number;

    

   //////\\\\\/////\\\\\\

    constructor(private rest: VraiFauxService ) { }

    getLevels(){
        this.levels  = this.rest.GetLevels();
    }

    getCategories() {
        this.categories = this.rest.GetCategories();
    }
    addQuestion() {
        this.log = "Nouvelle question : " + this.newQuestion.question + "Reponse: " + this.newQuestion.response;
    }

    
}
import { Component } from "@angular/core";

import { Question } from "../model/question.model";
import { VraiFauxService } from "../service/vraifaux.service";

@Component({
    selector: "list-question",
    templateUrl: "./list-question.component.html"
})
export class ListQuestionComponent {
    public questions : Question [] = [];

    constructor(private rest: VraiFauxService) {
        this.questions = this.rest.GetQuestions();
    }

    addStudent(question: Question) {
        this.rest.SetQuestion(question);
        this.rest.GetQuestions();
    }

}
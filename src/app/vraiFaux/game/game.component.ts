import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";

import { Component, OnInit } from "@angular/core";
import { VraiFauxService } from "../service/vraifaux.service";
import { Question } from "../model/question.model";
import { Player } from "../model/player.model";


@Component({
    selector: 'game',
    templateUrl: 'game.component.html'
})

export class GameComponent implements OnInit {
    public  questions : Question [] = [];
    public player: Player;
    public game: any;
    public nbLife: number[];
    public nbJoker: number[];

    constructor(private rest: VraiFauxService, private router: RouterExtensions) {
    this.questions = this.rest.GetQuestions();
    }
   
    ngOnInit(){
    this.showQuestion();
    this.player = new Player(3,2,0);
    this.nbLife = Array(this.player.nb_vie).fill(0);
    this.nbJoker = Array(this.player.nb_joker).fill(0);
    }

    showQuestion(){
        this.game = this.questions[Math.floor(Math.random() * this.questions.length)];
        return this.game;
    }

    check(choice){
        if(this.nbLife.length > 0){
            if(this.game.controlResponse == choice){
                this.player.score++;
                this.showQuestion();

            } else {
                dialogs.confirm({
                    message: this.game.response,
                    okButtonText: "OK",
                }).then(result => { 
                    this.nbLife.pop();  
                    if(this.player.score >0){
                        this.player.score--;
                    }
                    if(this.nbLife.length > 0) {
                        this.showQuestion();
                    } else {
                        this.router.navigateByUrl("/gameOver");
                    }
                });
            }
        }
           
    }

    useJoker(){
        if(this.nbJoker.length > 0){
            dialogs.confirm({
                title: "Option Joker",
                message: "Voulez-vous utiliser votre joker?",
                okButtonText: "OUI",
                cancelButtonText: "NON",
            }).then(result => {
                if(result == true){
                    this.nbJoker.pop();
                    this.showQuestion();
                }
            });
        }
    }
}

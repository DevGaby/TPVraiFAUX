import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'game-over',
    templateUrl: './game-over.component.html'
})

export class GameOverComponent implements OnInit{
    
    constructor(private router : RouterExtensions) {}

    ngOnInit(){
        this.replay();
    }

    replay(){
        dialogs.confirm({
            title: "PERDU !!!",
            message: "Voulez-vous jouer à nouveau?",
            okButtonText: "OUI",
            cancelButtonText: "NON",
        }).then(result => {
            // result argument is boolean
            if(result == true){
                this.router.navigateByUrl("/home");
            }
        });
    }

}
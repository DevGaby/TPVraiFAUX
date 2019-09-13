import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// Application VraiFaux
import { HomeComponent } from "./vraiFaux/home/home.component";
import { GameComponent } from "./vraiFaux/game/game.component";
import { GameOverComponent } from "./vraiFaux/game/game-over.component";
import { ClassementComponent } from "./vraiFaux/classement/classement.component";
import { OptionComponent } from "./vraiFaux/option/option.component";
import { ListQuestionComponent } from "./vraiFaux/list-question/list-question.component";


const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "game", component: GameComponent },
    { path: "gameOver", component: GameOverComponent},
    { path: "classement", component: ClassementComponent},
    { path: "listQuestion", component: ListQuestionComponent},
    { path: "option", component: OptionComponent},
    
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

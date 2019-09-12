import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

// Application VraiFaux
import { HomeComponent } from "./vraiFaux/home/home.component";
import { GameComponent } from "./vraiFaux/game/game.component";
import { GameOverComponent } from "./vraiFaux/game/game-over.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "game", component: GameComponent },
    { path: "gameOver", component: GameOverComponent},


];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }

import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Aplication VraiFaux
import { HomeComponent } from "./vraiFaux/home/home.component";
import { GameComponent } from "./vraiFaux/game/game.component";
import { GameOverComponent } from "./vraiFaux/game/game-over.component";
import { ClassementComponent } from "./vraiFaux/classement/classement.component";
import { AddQuestionComponent } from "./vraiFaux/add-question/add-question.component";
import { OptionComponent } from "./vraiFaux/option/option.component";


// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { ListQuestionComponent } from "./vraiFaux/list-question/list-question.component";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";




@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        GameComponent,
        GameOverComponent,
        ClassementComponent,
        AddQuestionComponent,
        OptionComponent,
        ListQuestionComponent,

    ],
    providers: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }

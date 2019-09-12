import { Injectable } from "@angular/core";
import { Question } from "../model/question.model";
import { Level } from "../model/level.model";
import { Category } from "../model/category.model";


@Injectable({
    providedIn: 'root'
})

export class VraiFauxService {
    questions: Question [] = [
        new Question( "La terre est- elle ronde?", "Oui, c'est Pythagore, au VIème siècle av. J.-C qui a émis en premier l'idée","Facile", "Geographie", true), 
        new Question("La capitale de la France est- elle Marseille?",'Non, La capitale de la France est Paris',"Facile",'Geographie', false),
        new Question( "Un litre d'eau pése 1 kg?", "Oui, en effet 1L d'eau pure pése 1kg","Facile", "Physique", true),
        new Question( "L'homme a besoin de dioxyde de carbone pour vivre?", "Non, Il a besoin oxygene","Facile", "Physique", false),
        new Question( "La tomate est un fruit?", "Oui, En botanique, la tomate est un fruit","Facile", "Biologie", true),
        new Question( "Le foie  fait passer les éléments nutritifs dans le sang?", "Non, c'est l'intestin grêle ","Facile", "Biologie", false),
        new Question( "La femelle du chat est elle la chatte?","Oui, le chat a pour femelle la chatte","Facile","Animaux", true),
        new Question( "Le saumon est il un mammifere?", "Non, c'est un ovipare il pont des oeufs ","Facile", "Animaux", false),
        new Question( "Le plus haut sommet du monde est en Amérique?", "Non c'est en Asie c'est l'Everest","Moyen", "Geographie",false),
        new Question( "La capitale de la Belgique est-elle Bruxelle?",'La capitale de la Belgique est Bruxelle',"Moyen",'Geographie',true),
        new Question( "Sale-t-on les route en hivers pour faire fondre la neige?",'Non, pour limiter le verglas. L’ajout de sel baisse le point de fusion de l’eau et limite la formation de glace.',"Moyen",'Physique',false),
        new Question( "Le passage de l’état solide à l’état liquide est la fusion ?",'Oui',"2",'Physique',true),
        new Question( "Les sédiments sont les débris de roche issus de l’érosion et transportés par le fleuve ?", "Oui, Les sédiments, qui forment une masse boueuse et plus opaque à l’estuaire du fleuve.","Moyen", "Biologie", true),
        new Question( "Dans le corps humain, les organes effectuent en permanence des échanges avec l'hypophyse?", "Non, Les organes prélèvent des nutriments et du dioxygène dans le sang et rejettent du dioxyde de carbone et des déchets.","Moyen", "Biologie", false),
        new Question( "Un chien avale sans macher?","Oui, le chien avale sans macher, on dit souvent qu'il est glouton","Moyen","Animaux", true),
    ]

    levels: Level [] = [
        new Level("Facile"),
        new Level("Moyen"),
        new Level("Difficile"),
    ]

    categories: Category [] = [
        new Category("Geographie"),
        new Category("Physique"),
        new Category("Biologie"),
        new Category("Animaux"),
        new Category("Autres"),


    ]
    GetQuestions(){
        return this.questions;
    }

    GetLevels(){
        return this.levels;
    }

    GetCategories(){
        return this.categories;
    }
}
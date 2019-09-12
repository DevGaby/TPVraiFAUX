export class Player {
    nb_vie: number = 0;
    nb_joker:any = 0;
    score: number = 0;
    

    constructor( nbVie: number, nbJoker:number, score: number) {
        this.nb_vie = nbVie;
        this.nb_joker = nbJoker;
        this.score = score;
    }
}
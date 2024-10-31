class Aluno{
    #matricula;
    #nome;
    #p1;
    #p2;

    constructor(matricula, nome){
        this.#matricula = matricula;
        this.#nome = nome;
        this.#p1 = null;
        this.#p2 = null;
    }

    get matricula(){
        return this.#matricula;
    }
    get nome(){
        return this.#nome;
    }
    get p1(){
        return this.#p1;
    }
    get p2(){
        return this.#p2;
    }
    set matricula(matricula){
        this.#matricula = matricula;
    }
    set nome(nome){
        this.#nome = nome;
    }
    set p1(p1){
        this.#p1 = p1;
    }
    set p2(p2){
        this.#p2 = p2;
    }
}
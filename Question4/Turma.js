class Turma extends Aluno{
    #id;
    
    constructor(id){
        this.#id = id;
        this.alunos = []
    }

    validate(matricula){
        let validate = false;
        for(var i = 0; i < this.alunos.length; i++){
            if(this.alunos[i].matricula != matricula){
                validate = true;
            }
        }
        return validate;
    }

    addStudent(matricula){
        if(this.validate){
            this.alunos.push
        }
    }

}
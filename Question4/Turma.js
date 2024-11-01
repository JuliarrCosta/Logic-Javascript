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

    addStudent(aluno){
        if(validate(aluno.matricula())){
            this.alunos.push(aluno)
            
        }else{
            throw new Error("Conflito no número de matrícula")
        }
    }

    removeStudent(matricula){
        if(!validate(aluno.matricula)){
            this.alunos = this.alunos.filter(livro => aluno.matricula == matricula)
        }
        
    }

    findStudent(matricula){
        return this.alunos.find(aluno => aluno.matricula === matricula)
    }

    //considerando que o front limitou a escolha do tipo da prova não vou validar a entrada
    assessmentStudent(matricula, tipoAvaliacao, valor){
        const aluno = findStudent(matricula)
        if(tipoAvaliacao === "p1"){
            aluno.p1 = parseFloat(valor)
        }
        else if(tipoAvaliacao === "p2"){
            aluno.p2 = parseFloat(valor)
        }
    }

    

}
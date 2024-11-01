class Turma{
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
        if(typeof aluno !== undefined){
            if(tipoAvaliacao === "p1"){
                aluno.p1 = parseFloat(valor).toFixed(1)
            }
            else if(tipoAvaliacao === "p2"){
                aluno.p2 = parseFloat(valor).toFixed(1)
            }
        }
    }

    media(matricula){
        let media = null
        const aluno = findStudent(matricula)

        if(typeof aluno !== undefined){
            if(aluno.p1 !== null && aluno.p1 !== null ){
                media = ((aluno.p1 + aluno.p2)/2).toFixed(1)
            }else if(aluno.p1 !== null && aluno.p1 === null){
                media = (aluno.p1/2).toFixed(1)
            }else if(aluno.p2 !== null && aluno.p2 === null){
                media = (aluno.p2/2).toFixed(1)
            }else{
                media = 0;
            }  
        }
        return media;
    }
}
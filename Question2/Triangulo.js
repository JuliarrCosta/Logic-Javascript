class Triangulo extends Vertice{
    #v1;
    #v2;
    #v3;

    constructor(v1, v2, v3){
        try{
            if(0.5 *Math.abs(v1*(v2.y - v3.y) + v2*(v3.y - v1.y) + v3*(v1.y - v2.y)) != 0){
                this.#v1 = v1;
                this.#v2 = v2;
                this.#v3 = v3;
            }

        }catch(error){
            console.error(error)

        }
    }

    get v1(){
        return this.#v1;
    }

    get v2(){
        return this.#v2;
    }
    
    get v3(){
        return this.#v3;
    }

    set v1(v1){
        this.#v1 = v1;
    }
    
    set v2(v2){
        this.#v2 = v2;
    }
    
    set v3(v3){
        this.#v3 = v3;
    }

    equals(triangulo){
        let result = false;
        if(this.#v1.x === triangulo.v1.x && this.#v1.y === triangulo.v1.y){
            if(this.#v2.x === triangulo.v2.x && this.#v2.y === triangulo.v2.y){
                if(this.#v3.x === triangulo.v3.x && this.#v3.y === triangulo.v3.y){
                    result = true;
                }else{
                    result = false;
                }
            }else{
                result = false;
            }
        }else{
           result = false;
       }
       return result;
    }

    get perimeter(){
        //acabei repetindo código, esqueci que dentro da classe vétice já tinha o método distancia que dava para reduzir boa parte disso[depois conserto]
        return Math.sqrt((this.#v1.x - this.#v2.x)**2 + (this.#v1.y - this.#v2.y)**2) + 
        Math.sqrt((this.#v3.x - this.#v2.x)**2 + (this.#v3.y - this.#v2.y)**2) + 
        Math.sqrt((this.#v1.x - this.#v3.x)**2 + (this.#v1.y - this.#v3.y)**2); 
    }

    type(){
        
        let type = "Não identificado";
        const a = this.#v1.distance(this.#v2);
        const b = this.#v2.distance(this.#v3);
        const c = this.#v1.distance(this.#v2);

        if(a !== b && b!==c && a !== c ){
            type = "Escaleno"
        }else if(a === b && b === c && a === c){
            type = "Equilátero"
        }else{
            //Por ter mais validações deixei o isósceles por último, mas se descobrissem(acho difícil) um outro triângulo daria erro. Por via das dúvidas seria melhor validar
            type = "Isósceles"
        }
       
        return type;
    }

    clone(){
        return new Triangulo(this.#v1, this.#v2, this.#v3)
    }

    get area(){
        const S = perimeter()/2;
        //Analisar forma de não repetir isso
        const a = this.#v1.distance(this.#v2);
        const b = this.#v2.distance(this.#v3);
        const c = this.#v1.distance(this.#v2);

        return Math.sqrt(S*(S-a)*(S-b)*S-c)
    }


}
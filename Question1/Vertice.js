class Vertice{
    //#private, _protected, public
    #x;
    #y;

    constructor(x, y){
        this.#x = x
        this.#y = y
    }

    get x() {
        return this.#x;
    }
    
    get y() {
        return this.#y;
    }
    
    distance(vertice){
        //Considerando que já teremos um vertice criado para calcular a distancia, vetice.x/y sera x1/y1
        const dx = this.#x - vertice.x;
        const dy = this.#y - vertice.y;

        return Math.sqrt(dx**2 + dy**2)
    }
    //poderia ter criado um set para alterar o atributo de forma mais correta
    move(newX, newY){
        this.#x = newX;
        this.#y = newY;
    }

    equals(vertice){
        //diferente do const, let pode ser modificado
        let result = false;
        if(this.#x === vertice.x){
            if(this.y === vertice.y){
                result = true;
            }else{
                result = false;
            }
        }else{
            result = false;
        }
        return result;
    }
    
}
    //diferente do metodo uma function pode ser usada fora da classe
    function createVertice(number) {
        const x = parseInt(prompt(`x: ${number}`));
        const y = parseInt(prompt(`y: ${number}`));

        return new Vertice(x, y);
    }

    const v1 = createVertice(1);
    const v2 = createVertice(2);
    const v3 = createVertice(3);
    
    v1.move(1, 1)

    console.log(v1.equals(v2))
    console.log(v2.equals(v3))

    console.log(v1.distance(v2))
    console.log(v2.distance(v3))

    

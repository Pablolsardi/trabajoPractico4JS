// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas 
// los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo{
    #base;
    #altura;
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }

    set setBase(newBase){
        if(newBase>0){
            this.#base = newBase;
        }else{
            alert("No puede existir una distancia negativa o nula");
        }
    }

    get getBase(){
        return this.#base;
    }

    set setAltura(newAltura){
        if(newAltura>0){
            this.#altura = newAltura;
        }else{
            alert("No puede existir una distancia negativa o nula");
        }
    }

    get getAltura(){
        return this.#altura;
    }

    calcularPerimetro(){
        return ((this.getBase*2)+(this.getAltura*2));
    }

    calcularArea(){
        return (this.getBase * this.getAltura);
    }
}
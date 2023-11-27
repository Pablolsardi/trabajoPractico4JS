// 9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". 
// Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método 
// "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus 
// métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. 

class Animal{
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido() {
        console.log("Sonido genérico de animal");
    }
}

class Perro extends Animal{
    constructor(nombre, edad, raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    emitirSonido() {
        console.log("Guau, guau");
    }
}

class Gato extends Animal{
    constructor(nombre, edad, color) {
        super(nombre, edad);
        this.color = color;
    }

    emitirSonido() {
        console.log("Miau, miau");
    }
}

const perro1 = new Perro("Ayudante de Santa", 3, "Callejero");
const gato1 = new Gato("Bola de nieve 7", 2, "Negro");


perro1.emitirSonido();
gato1.emitirSonido();  

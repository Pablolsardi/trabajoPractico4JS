// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. 
// Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y 
// cual es el rasgo característico de esta generación.

class Persona{
    constructor(nombre, sexo, peso, altura, anioNac){
        this.nombre = nombre;
        this.dni = this.generarDNI();
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.anioNac = anioNac;
        this.edad = this.sacarEdad();
    }

    mostrarGeneracion(){
        if(this.anioNac>=1930 && this.anioNac<=1948){
            alert(this.nombre + " pertenece a: SILENT GENERACIÓN - Austeridad");
        }else if(this.anioNac>=1949 && this.anioNac<=1968){
            alert(this.nombre + " pertenece a: BABY BOOM - Ambición");
        }else if(this.anioNac>=1969 && this.anioNac<=1980){
            alert(this.nombre + " pertenece a: GENREACIÓN X - Obsesión por el éxito");
        }else if(this.anioNac>=1981 && this.anioNac<=1993){
            alert(this.nombre + " pertenece a: GENREACIÓN Y - Frustración");
        }else if(this.anioNac>=1994 && this.anioNac<=2010){
            alert(this.nombre + " pertenece a: GENREACIÓN Z - Irreverencia");
        }
    }

    esMayorDeEdad(){
        if((2023-this.anioNac)>=18){
            document.write(`<p>Es mayor de edad</p>`);
        }else{
            document.write(`<p>Es menor de edad</p>`);
        }
    }

    sacarEdad(){
        return (2023-parseInt(this.anioNac));
    } //Para que se calcule sola la edad y no hay posibilidad ee cometer una contradicción

    mostrarDatos(){
        document.write(`<h2>Nombre: ${this.nombre}</h2>`);
        document.write(`<p>DNI: ${this.dni}</p>`);
        document.write(`<p>Año de Nacimiento: ${this.anioNac}</p>`);
        document.write(`<p>Edad: ${this.edad}</p>`);
        this.esMayorDeEdad();
        document.write(`<p>Sexo: ${this.sexo}</p>`);
        document.write(`<p>Peso: ${this.peso}</p>`);
        document.write(`<p>Altura: ${this.altura}</p>`);
    }

    generarDNI(){
        const min = 10000000;
        const max = 99999999;
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

const persona1 = new Persona('Jose López', 'H',80, 1.80, 2007);
persona1.mostrarDatos();
persona1.mostrarGeneracion();
const persona2 = new Persona('Mariana Ramirez', 'M',61, 1.69, 1970);
persona2.mostrarDatos();
persona2.mostrarGeneracion();


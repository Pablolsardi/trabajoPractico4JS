// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() 
// para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

class Libro{
    #isbn;
    #titulo;
    #autor;
    #numPaginas;
    constructor(isbn, titulo, autor, numPaginas){
        this.#isbn = isbn;
        this.#titulo = titulo;
        this.#autor = autor;
        this.#numPaginas = numPaginas;
    }

    set setTitulo(newTitulo){
        this.#titulo = newTitulo;
    }

    get getTitulo(){
        return this.#titulo;
    }

    set setAutor(newAutor){
        this.#autor = newAutor;
    }

    get getAutor(){
        return this.#autor;
    }

    set setIsbn(newIsbn){
        let isbn = parseInt(newIsbn);
        if(isbn>0){
            this.#isbn =isbn;
        }
    }

    get getIsbn(){
        return this.#isbn;
    }

    set setNumPaginas(newNumPaginas){
        let paginas = parseInt(newNumPaginas);
        if(paginas>0){
            this.#numPaginas = paginas;
        }
    }

    get getNumPaginas(){
        return this.#numPaginas;
    }

    mostrarLibro(){
        document.write(`<p>El libro ${this.getTitulo} con ISBN ${this.getIsbn} creado por el autor ${this.getAutor} tiene ${this.getNumPaginas} páginas</p>`);
    }
}

const libros = [];

const libro1 = new Libro(123, 'Bajo la misma estrella', 'John Green', 301);
const libro2 = new Libro(124, 'Harry Potter', 'J.K.Rowling', 405);
const libro3 = new Libro(125, 'Martin Fierro', 'José Hernandez', 360);

libros[0] = libro1;
libros[1] = libro2;
libros[2] = libro3;

let mayorPag = 0;
let libroMasPag;

for(let i=0 ; i<libros.length ; i++){
    libros[i].mostrarLibro();

    if(libros[i].getNumPaginas>mayorPag){
        mayorPag = libros[i].getNumPaginas;
        libroMasPag = i;
    }
}


document.write(`<p><br><br>El libro con más paginas es ${libros[libroMasPag].getTitulo} con ${libros[libroMasPag].getNumPaginas} páginas</p>`);
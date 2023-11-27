// 4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre 
// y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades.
// Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
// Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados.

class Producto{
    #codigo;
    #nombre;
    #precio;
    constructor(codigo,nombre,precio){
        this.#codigo = codigo;
        this.#nombre = nombre;
        this.#precio = precio;
    }

    get getCodigo(){
        return this.#codigo;
    }
    get getNombre(){
        return this.#nombre;
    }
    get getPrecio(){
        return this.#precio;
    }

    imprimirDatos(){
        document.write(`<h2>${this.getNombre}</h2>`);
        document.write(`<p>Cod.${this.getCodigo}</p>`);
        document.write(`<p>Precio: $${this.getPrecio}</p>`);
        document.write(`<br>`);
    }
}

const productos = [];

const prod1 = new Producto(1,'Manteca',300);
productos.push(prod1);
const prod2 = new Producto(2,'Leche',250);
productos.push(prod2);
const prod3 = new Producto(3,'Harina',400);
productos.push(prod3);

for(let i=0 ; i<productos.length ; i++){
    productos[i].imprimirDatos();
}
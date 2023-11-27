// 1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o 
// apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

// Output:

// objeto.encender();       auto encendido
// objeto.apagar()          El auto se apagó

const auto = {
    color: 'Rojo',
    marca: 'VolksWagen',
    modelo: 'Polo',

    encender(){
        document.write(`<p>Auto encendido</p>`);
    },

    apagar(){
        document.write(`<p>Auto apagado</p>`);
    }
}
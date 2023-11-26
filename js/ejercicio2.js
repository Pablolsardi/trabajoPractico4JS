// 2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
// Una propiedad titular con el valor "Alex".
// Una propiedad saldo, teniendo como valor inicial 0.
// Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
// Un método extraer() que permita retirar la cantidad pasada como parámetro.
// Un método informar() que retorne la información del estado de la cuenta. 

// Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción 
// del estado de la cuenta.

const cuenta = {
    titular: 'Alex',
    saldo: 0.0,

    ingresar(nuevoSaldo){
        if(nuevoSaldo>0){
            this.saldo += nuevoSaldo;
        }else{
            alert("El saldo ingresado debe ser positivo");
        }
    },

    extraer(extraccion){
        if(extraccion>0 && extraccion<=this.saldo){
            this.saldo -= extraccion;
        }else{
            alert("Saldo insuficiente");
        }
    },

    informar(){
        alert(cuenta.titular + " tiene $" + cuenta.saldo)
    },
}

let opcion;
do{
    opcion = parseInt(prompt("Ingrese la opción: 1-Ingresar | 2-Extraer | 3-Consultar | 4-Salir"));
    switch(opcion){
    
        case 1: 
            let newSaldo = parseFloat(prompt("Ingrese el saldo a agregar"));
            cuenta.ingresar(newSaldo);
            cuenta.informar();
            break;
        
        case 2: 
            let newExtraccion = parseFloat(prompt("Ingrese el monto a extraer"));
            cuenta.extraer(newExtraccion);
            cuenta.informar();
            break;
    
        case 3: 
            cuenta.informar();
            break;
    
        default : 
            if(opcion==4){
                break;
            }else{
                alert("Opcion incorrecta");
            }
    }

}while(opcion!=4);
let permiso = true;
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    get getNombre() {
        return this.nombre;
    }
    set setNombre(nombre) {
        if (permiso) {
            this.nombre = nombre;
        }
        else {
            console.log('No tienes permisos para esto');
        }
    }
}
const objeto = new Persona('Brian');
console.log(objeto.getNombre); // Brian
objeto.setNombre = 'Jose';
console.log(objeto.getNombre); // Jose
permiso = false;
objeto.setNombre = 'Maria'; // No tienes permisos para esto

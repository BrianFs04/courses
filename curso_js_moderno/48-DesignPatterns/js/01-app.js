/*
Categorias de pratones

De creación - Permiten crear objetos y permiten la reutilización del código

Estructura -  Explican como deben comunicarse los objetos y clases en grandes proyectos

Comportamiento -  Se encargan de como se comportan y comunican los objetos
*/

// Class pattern

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const person = new Person("Brian", "email@email.com");

console.log(person);

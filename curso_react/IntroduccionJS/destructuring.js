const Persona = {
  nombre: 'Juan',
  edad: 37,
  casado: false,
  hijo: {
    nombreHijo: 'Julia',
  },
};

/* const { nombre, edad, casado } = Persona;
console.log(nombre, edad, casado); */

function objDes({ nombre, edad, casado }) {
  console.log(nombre, edad, casado);
}

objDes(Persona);

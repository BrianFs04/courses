const Persona = {
  nombre: 'Juan',
  edad: 37,
  casado: false,
  hijo: {
    nombreHijo: 'Julia',
  },
};

Persona.id = 1;
console.log(Persona);
console.log(Persona.nombre);
console.log(Persona.hijo.nombreHijo);

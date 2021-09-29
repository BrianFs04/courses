const datos = [
  {
    nombre: 'Juan',
    edad: 37,
  },
  {
    nombre: 'Vic',
    edad: 20,
  },
  {
    nombre: 'Fran',
    edad: 60,
  },
  {
    nombre: 'Pepe',
    edad: 45,
  },
];

datos.forEach(({ edad }) => console.log(edad));

datos.map(({ nombre }) => console.log(nombre));

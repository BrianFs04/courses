var Animal = /** @class */ (function () {
    function Animal(_nombre, _tamano) {
        this.nombre = _nombre;
        this.tamano = _tamano;
    }
    Animal.prototype.moverse = function () {
        console.log('Me estoy moviendo');
    };
    return Animal;
}());
var obj = new Animal('Serpiente', 2);
// Puedo acceder a propiedades y métodos ya que son públicos

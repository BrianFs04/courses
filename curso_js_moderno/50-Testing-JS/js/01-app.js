// Testing sin herramientas

// Test 2 valores

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}
let result = suma(2, 1);
let esperado = 3;

if (result !== esperado) {
    console.log(`El ${result} es diferente a lo esperado`);
} else {
    console.log("La prueba paso correctamente");
}

result = restar(11, 5);
esperado = 5;

if (result !== esperado) {
    console.log(`El ${result} es diferente a lo esperado`);
} else {
    console.log("La prueba paso correctamente");
}

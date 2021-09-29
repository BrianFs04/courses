// Testing sin herramientas

// Test 2 valores

function suma(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

async function sumaAsync(a, b) {
    return Promise.resolve(suma(a, b));
}
let result = suma(2, 1);
let esperado = 3;

expected(esperado).toBe(result);

result = restar(11, 5);
esperado = 5;
expected(esperado).toBe(result);

test("Suma 10 + 20 y el resultado debe ser 30", async () => {
    const result = await sumaAsync(10, 20);
    const esperado = 30;
    expected(esperado).toBe(result);
});
async function test(mensaje, callback) {
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error("Error:");
        console.error(error);
    }
}
function expected(esperado) {
    return {
        toBe(result) {
            if (result !== esperado) {
                console.log(`El ${result} es diferente a lo esperado`);
            } else {
                console.log("La prueba paso correctamente");
            }
        },
        toEqual(result) {
            if (result !== esperado) {
                console.log(`El ${result} no es igual a lo esperado`);
            } else {
                console.log("La prueba paso correctamente");
            }
        },
    };
}

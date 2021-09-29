const applyDiscount = new Promise((resolve, reject) => {
    const discount = true;

    if (discount) {
        resolve("Discount applied");
    } else {
        reject("It was not possible to apply the discount");
    }
});

applyDiscount
    .then((result) => {
        discount(result);
    })
    .catch((error) => {
        console.log(error);
    });

// There are three possible values in promises
// fulfilled - The promised was done
// rejected - The promised wasn't done
// pending - It hasn't been fulfilled neither rejected

function discount(message) {
    console.log(message);
}

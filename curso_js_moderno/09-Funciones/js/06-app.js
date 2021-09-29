function sayHi(name = "Unknown", lastName = "") {
    console.log(`Hi ${name} ${lastName} `);
}

sayHi();
sayHi("Brian");
sayHi("Brian", "Florez");

// Module pattern

// Before EcmaScript 6
const module1 = (function () {
    const name = "Brian";

    function hey() {
        console.log("Hey");
    }

    return {
        name,
        hey,
    };
})();

// Now
const showClient = (name) => {
    console.log(name);
};

export default showClient;

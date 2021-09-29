// Functions that return a function
const getClient = () => () => console.log("Brian");

const fn = getClient();

fn();

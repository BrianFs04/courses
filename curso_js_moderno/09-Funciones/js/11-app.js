/* const learning = function (technology) {
    console.log(`Learning ${technology}`);
};

learning("JS"); */

// It can be short with an arrow function when it has only one line braces are not required
// It has a "cleaner" syntax
const learning2 = (technology, technology2) =>
    `Learning ${technology} and ${technology2}`;

console.log(learning2("JS", "Node.js"));

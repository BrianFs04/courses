const cliente = {
    nombre: "Brian",
    balance: 500,
    tipo: "Premium",
};
// Snapshots son datos que se almacenan en un string aparte
describe("Testing al cliente", () => {
    test("Es Brian", () => {
        expect(cliente).toMatchSnapshot();
    });
});

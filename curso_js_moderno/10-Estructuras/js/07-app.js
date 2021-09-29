const efective = 300;
const credit = 400;
const available = efective + credit;
const toPay = 600;

if (efective > toPay || credit > toPay || available > toPay) {
    console.log("You can pay");
} else {
    console.log("Noy enough amount");
}

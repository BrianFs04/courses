const authenticated = true;
const canPay = true;

console.log(authenticated ? "User authenticated" : "No authenticated");
console.log(authenticated && canPay ? "You can pay" : "You can't pay");

const efective = 300;
const credit = 400;
const available = efective + credit;
const toPay = 600;

if (efective > toPay || credit > toPay || available > toPay) {
    if (efective > toPay) {
        console.log("You pay with efective");
    } else {
        console.log("You use another way of payment");
    }
} else {
    console.log("Noy enough amount");
}

console.log(
    authenticated
        ? canPay
            ? "You're logged in and can pay"
            : "You're logged in but can't pay"
        : "You're not logged in"
);

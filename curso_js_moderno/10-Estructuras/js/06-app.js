const user = true;
const canPay = true;

if (user && canPay) {
    console.log("You can buy");
} else if (!user && !canPay) {
    console.log("You can't buy");
} else if (!user) {
    console.log("Log in first");
} else if (!canPay) {
    console.log("Not enough amount");
}

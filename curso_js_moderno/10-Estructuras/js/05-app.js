// Switch case

const paymentMethod = "efective";

switch (paymentMethod) {
    case "efective":
        toPay();
        break;
    case "check":
        toPay();
        break;
    case "card":
        toPay();
        break;
    default:
        console.log("You haven't selected a payment method yet");
        break;
}

function toPay() {
    console.log(`You payed with ${paymentMethod}`);
}

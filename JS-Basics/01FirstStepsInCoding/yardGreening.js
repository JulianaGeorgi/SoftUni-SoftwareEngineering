function yardGreening(input) {

    let priceBeforeDiscount =Number(input[0]) * 7.61;
    let discount = priceBeforeDiscount * 0.18;
    let finalPrince = priceBeforeDiscount - discount;
    console.log("The final price is: " + finalPrince + " lv.");
    console.log("The discount is: " + discount + " lv.");
}
yardGreening(["550"]);
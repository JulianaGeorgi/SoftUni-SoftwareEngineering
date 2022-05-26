function schooMaterials(input) {
let pens = Number(input[0]);
let markers = Number(input[1]);
let liters = Number(input[2]);
let discount = Number(input[3]);

let finalPriceForPens = pens * 5.8;
let finalPriceForMarkers = markers * 7.2;
let finalPriceForLiquid = liters * 1.2;

let finalPrice = finalPriceForPens + finalPriceForMarkers + finalPriceForLiquid;
let priceAfterDiscount = finalPrice - (finalPrice * (discount/100));
console.log(priceAfterDiscount);
}
schooMaterials(["2 ","3 ","4 ","25 "]);
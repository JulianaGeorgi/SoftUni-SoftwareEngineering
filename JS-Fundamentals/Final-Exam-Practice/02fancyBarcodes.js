function fancyBarcodes(input) {

    let numOfBarcodes = Number(input.shift());
    let pattern = /(@#{1,})([A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;

    for (let i = 0; i < numOfBarcodes; i++) {
        let barcode = input[i];
        let match = pattern.exec(barcode);
        let concatenateDigits = "";
        let isValid = false;

        while (match) {

            isValid = true;

            for(let ch of match[1]){
                if(!isNaN(Number(ch))){
                    concatenateDigits+= ch;
                }
            }

            match = pattern.exec(barcode);
        }

        if (isValid) {
            concatenateDigits = concatenateDigits !== "" ? concatenateDigits : "00"
            console.log(`Product group: ${concatenateDigits}`);
        } else {
            console.log("Invalid barcode");
        }
    }
}

fancyBarcodes(["3",
    "@#Fre1hFisH@#",
    "@###Brea0D@###",
    "@##Che4s6E@##"]);

fancyBarcodes(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"]);
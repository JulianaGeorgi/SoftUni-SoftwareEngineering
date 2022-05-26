function shopping(input){

   let budget = Number(input[0]); 
   let GPU = Number(input[1]); // videocard
   let CPU = Number(input[2]); // processor
   let RAM = Number(input[3]); 

   let moneyForGPU = GPU * 250;
   let moneyForCPU = moneyForGPU * 0.35 * CPU;
   let moneyForRam = moneyForGPU * 0.1 * RAM;

   let totalSum = moneyForGPU + moneyForCPU + moneyForRam;

   if(GPU > CPU){
       totalSum = totalSum * 0.85;
   }
   if(totalSum <= budget){
       console.log(`You have ${(budget - totalSum).toFixed(2)} leva left!`);
   }else {
    console.log(`Not enough money! You need ${(totalSum - budget).toFixed(2)} leva more!`);
   }
}
shopping(["900","2","1","3"]);
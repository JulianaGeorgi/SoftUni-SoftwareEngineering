function readText(input){

   let index = 0; 

   let text = input[index]; // прочитаме нещо от масива - когато не знаем дължината на масива, следи елементите в масива
   index++;  // за да вземе инпут от едно, после от две - взима следващия елемент от масива 

   while(text !== "Stop"){ // не ни трябва да съзадаваме променлива, като търсим комнда -» while е по-добрият вариант
       console.log(text);
       text = input[index];
       index++; // за да взема следващата стойност
   } 

}

readText(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"]);


/*
while(text !== "Stop"){ 
    console.log(text);
    text = input[index++]; // МОЖЕ И ТАКА, защото е ПОСТинкрементация!! по-добре
}
*/

function race(input){

let nameMap = new Map();
let names = input.shift().split(", ");

names.forEach(person => {
    nameMap.set(person, 0); 
});

let letterPattern = /[A-Za-z]+/gm;
let digitsPattern = /\d/g;

for(let index = 0; index < input.length; index++){
    let currentLine = input[index];
    if(currentLine === "end of race"){
        break;
    }

    let name = currentLine.match(letterPattern).join("");
    let distance = (currentLine.match(digitsPattern)).reduce((a,b)=>{
        return Number(a) + Number(b);
    },0); // to start from 0; can be any number 
    
    if(nameMap.has(name)){
        let previousDistance = nameMap.get(name);

        previousDistance+= distance;

        nameMap.set(name, previousDistance); //latestDistance
    } 
}

let sortedNames = Array.from(nameMap).sort((a,b) => {
return b[1]- a[1];
});

console.log(`1st place: ${sortedNames[0][0]}`);
console.log(`2nd place: ${sortedNames[1][0]}`);
console.log(`3rd place: ${sortedNames[2][0]}`);

}

race(['George, Peter, Bill, Tom',
'G4e@55or%6g6!68e!!@ ',
'R1@!3a$y4456@',
'B5@i@#123ll',
'G@e54o$r6ge#',
'7P%et^#e5346r',
'T$o553m&6',
'end of race']);
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
'Mi*&^%$ch123o!#$%#nne787) ',
'%$$B(*&&)i89ll)*&) ',
'R**(on%^&ald992) ',
'T(*^^%immy77) ',
'Ma10**$#g0g0g0i0e',
'end of race']);
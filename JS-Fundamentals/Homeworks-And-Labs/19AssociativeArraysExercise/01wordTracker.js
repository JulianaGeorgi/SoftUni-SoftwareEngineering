function wordTracker(data){

    let result = new Map();

    let words = data.shift().split(" ");
    for(let word of words){
        result.set(word, 0);
    }

    for(let word of data){ // looping the keys
        if(result.has(word)){
            let oldValue = result.get(word); // returns the current value
            result.set(word, oldValue + 1); // with the set we set the new value; if this key exists, increase with one 
        }
    }

    let sortResult = Array.from(result.entries()).sort(([keyA, valueA], [keyB, valueB]) => {
    return valueB - valueA;
    });
    
    for(let [key, value] of sortResult){
        console.log(key,"-",value);
    }
}

wordTracker(['this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']);
wordTracker(['is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']);
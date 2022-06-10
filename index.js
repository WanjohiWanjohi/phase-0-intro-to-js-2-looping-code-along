// Code your solutions in this file
function writeCards(stringNames, eventName){
    var messages=[];
    for(let counter=0; counter<stringNames.length; counter++){
        var mess = `Thank you, ${stringNames[counter]}, for the wonderful ${eventName} gift!`;
        messages.push(mess);
    }
    return messages;
}
function countDown(positiveInteger){
    let currentDigit = positiveInteger;
    while ( currentDigit>=0) {
      console.log(currentDigit);
      currentDigit -= 1;
    };
    
}

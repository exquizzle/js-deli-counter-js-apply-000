function takeANumber(currentLineArr, newPerson)  {
  newPersonIdx = currentLineArr.length+2;
  let greeting = `Welcome, ${newPerson}. You are number ${newPersonIdx} in line.`
  return greeting;
}

function nowServing(currentLineArr)  {
  if ( currentLineArr.length === 0 )  {
    return  "There is nobody waiting to be served!";
  }  else  {
    return currentLineArr.shift();
  }
}

function currentLine(currentLineArr)  {
  if (currentLineArr.length === 0)  {
    return "The line is currently empty";
  }  else  {
    let theLine = "The line is currently: ";
    for ( let i = 0; i<currentLineArr.length; i++ )  {
      theLine += `${i+1}. ${currentLineArr[i]}`;
    }
    return theLine;
  }
}

function takeANumber(currentLineArr, newPerson)  {
    newPersonIdx = currentLineArr.length+1;
    let greeting = `Welcome, ${newPerson}. You are number ${newPersonIdx} in line.`
    currentLineArr.push(newPerson);
    return greeting;
  }

  function nowServing(currentLineArr)  {
    if ( currentLineArr.length === 0 )  {
      return  "There is nobody waiting to be served!";
    }  else  {
      return "Currently serving " + currentLineArr.shift();
    }
  }

  function currentLine(currentLineArr)  {
    if (currentLineArr.length === 0)  {
      return "The line is currently empty";
    }  else  {
      let theLine = "The line is currently:";
      for ( let i = 0; i<currentLineArr.length; i++ )  {
        theLine += ` ${i+1}. ${currentLineArr[i]},`;  // gotta format away the last comma ugh
      }
      theLine = theLine.slice(0, -1);
      return theLine;
    }
  }

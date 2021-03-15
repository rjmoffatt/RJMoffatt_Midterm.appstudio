/*
Created a new form named 'bucketList'.
Asks user if they want to see their bucket list or add an item.
Gets bucket list item from the user or displays the entire bucket list in the console, one item per line. 
Runs until the user wants to stop. 
The program runs without error.


let bucketList = []
addItem = true

while (addItem == true){
  newItem = prompt("Enter an item that you want on your bucket list(Type 'stop' to have it displayed):")
  if (newItem.toString().toLowerCase() == 'stop'){
    console.log(bucketList)
    addItem = false
  } else { 
    bucketList.push(newItem)
    }
  }
   */ 
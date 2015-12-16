function findLetter(letter){
  
  //get the letter
  letter.toString();
  var text = prompt("enter your text","");
  
  // loop length needs to be as long as text length
  var textLength = text.length; 
  
  //index position
  var dickSize = 0;
  var dick = 0;
  
  //array to store index values of where letter was found
  var inpussy = [];
 
  // for fun
  function grow(){dickSize++;}
  
  //the mechanism to search for the letter and store the index
 function getSome(){
   while (dickSize < textLength){
      var dick = text.indexOf(letter, dickSize);
      if (dickSize == dick){
  	  	inpussy.push(dick);}
      grow();  
 	}
   return inpussy;
 }
 
return getSome();

console.log(findLetter("a"));
  
};


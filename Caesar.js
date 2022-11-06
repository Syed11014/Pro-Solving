const prompt = require("prompt-sync")({ sigint: true });

var str = prompt("Enter Word?");
let key= prompt("Enter Key ");

  function cipher(str,key){
    key= key%26;
    var lowerCaseStr= str.toLowerCase();
    var alpha= 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newStr= '';
    for (var i=0;i<lowerCaseStr.length;i++){
    var currentLetter=lowerCaseStr[i];
    if(currentLetter===' '){
      newStr+=currentLetter;
      continue;
    }
    var currentIndex=alpha.indexOf(currentLetter);
    var newIndex=currentIndex+key;
    if(newIndex>25)
    newIndex=newIndex-26;
    if(newIndex<0)
    newIndex=newIndex+26;
    if(str[i]===str[i].toUpperCase()){
      newStr+=alpha[newIndex].toUpperCase();
    }
    else
    newStr+=alpha[newIndex];
  }
  return newStr;
}
console.log(cipher(str,key))

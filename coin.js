const prompt = require("prompt-sync")({ sigint: true });

const cents =[25,10,5,1]

let change = prompt("Enter change? ");

let coins =0 

for( i=0; i=change; i++)
{
  if(change>= cents[0]){
    change=change-cents[0]
    coins++;
  }
  else if(change < cents[0] && change >=cents[1]){
    change = change-cents[1]
    coins++;
  }
  
  else if(change < cents[1] && change >=cents[2]){
    change=change-cents[2]
    coins++;
  }
  
  else if(change < cents[2] && change >=cents[3]){
    change=change-cents[3]
    coins++;
  }
}
console.log(`Total coins are  ${coins}`)

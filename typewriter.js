const sentence = "hello there from lighthouse labs";
let delay = 0;
let printedDelay  = 0;
// Loop through sentence
for (const char of sentence) {
  // Use setTimeout to register a callback
  //In Delay ms seconds run anoymous function i.e first arguement of set timeout
  //(line 9-12)  
  setTimeout(() => {
    //Printing out each character and represention of delay ie. printed delay
    // process.stdout.write(`'${char}'`);
    //process.stdout.write(` => ${printedDelay} ms`);
    process.stdout.write(char);
    //printedDelay += 50
  }, delay) // <= 1s delay to make it noticeable. Can dial it down later 
  //incrementing delay so there will be delay b/w each character ie each 
  //callback or anonymous function/first arguement of set time out
  delay += 50;
  
}
setTimeout(() => {
  console.log('');
}, delay);

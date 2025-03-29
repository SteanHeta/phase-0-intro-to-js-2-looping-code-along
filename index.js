// Code your solutions in this file
function writeCards(names, event) {
    const messages = names.map(name => `Thank you, ${name}, for the wonderful ${event} gift!`);
    return messages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  module.exports = {
    writeCards,
    countDown
  };
  

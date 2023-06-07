const validator = {
  // ...

  isValid:function(CardNumber){
    let reverseNumber=CardNumber.split('').reverse();

  
    return reverseNumber

  }
  
}

export default validator;
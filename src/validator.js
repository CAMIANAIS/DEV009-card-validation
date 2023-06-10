const validator = {
  // ...
  maskify:function(CardNumber){
    const length = CardNumber.length;
    const lastFourDigits = CardNumber.slice(-4);
    const maskedDigits = length - 4 < 0 ? '' : '#'.repeat(length - 4);

    return maskedDigits + lastFourDigits;},

  
  isValid:function(CardNumber){
    
    const reverseNumber=CardNumber.split('').reverse();
    
    let sum=0;
    let doubleDigits=false;

    for(let i=0;i<reverseNumber.length;i++){
      let digit=parseInt(reverseNumber[i],10)

      if (doubleDigits) {
        digit *=2;
        if(digit>9){
          digit=digit-9;
        }
      }
      sum+=digit;
      doubleDigits=!doubleDigits
    }
    return sum%10===0;
    
      
  }

}

export default validator;


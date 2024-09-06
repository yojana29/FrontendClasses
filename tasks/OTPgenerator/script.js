  
  let button = document.querySelector("button");
  let NewOTP;

  function OTPGenerator(length = 6){
    const digits = '0123456789';
    let otp = '';
    for(let i = 0;i < length;i++){
        otp += digits[Math.floor(Math.random() * 10)];
    }
    return otp;
  }
  button.addEventListener("click",()=>{
    NewOTP = OTPGenerator();
    // console.log(NewOTP);
    storedOTP = localStorage.getItem("OTP",NewOTP);
     if(storedOTP == NewOTP ){
       console.log("OTP already generated");
       console.log(`already existing OTP:${NewOTP}`);
      NewOTP = OTPGenerator();
  
     }
     else{
      console.log(`newOTP generated is : ${NewOTP}`);
    }
    localStorage.setItem("OTP",NewOTP);
  });

 


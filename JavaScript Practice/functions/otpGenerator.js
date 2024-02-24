function otpGenerator(){
    let otp=Math.random()*10000
    return Math.floor(otp)
}
console.log(otpGenerator())
console.log(otpGenerator())
console.log(otpGenerator())
console.log(otpGenerator())
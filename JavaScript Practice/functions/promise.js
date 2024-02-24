const promiseFromAaradhya= new Promise((resolve,reject)=>{
    let parentDecision=false
    if(parentDecision) resolve("Yay Shadi ki tayari karo Papa man gaye")
    else reject("Papa nhi mane unhone aur kahi shadi thik kar di hai")
})

promiseFromAaradhya.then((message)=>{
    console.log("Message from my gf: "+message)
    console.log("Life abb set hai guru")
}).catch((message)=>{
    console.log("Message from my gf: "+message)
    console.log("Thukrake mera pyar mera intekam dekhegi")
})
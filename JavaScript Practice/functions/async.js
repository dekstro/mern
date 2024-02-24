console.log("1")
console.log("2")
setTimeout(()=>{console.log("3")},3000)
setInterval(()=>{
    let date =new Date()
    console.log(date.toLocaleTimeString())
},1000)
console.log("4")
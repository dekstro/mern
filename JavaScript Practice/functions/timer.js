/*
setTimeout(function (){
    console.log("Tik-tok")
},5000)
*/
setInterval(function(){
    let date =new Date()
    const newTime = date.toLocaleTimeString()
    console.log(newTime)},1000)


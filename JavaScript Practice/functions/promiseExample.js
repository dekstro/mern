const papa=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5) resolve("Papa iss rishte ko maan gaye")
        else reject("Papa nhi mane")
    },3000)
})
const mami=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5) resolve("Mami iss rishte ko maan gaye")
        else reject("Mami nhi mane")
    },2000)
})
const bhai=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(Math.random()>0.5) resolve("Bhai iss rishte ko maan gaye")
        else reject("Bhai nhi mane")
    },3000)
})

const familypromise=[papa,mami,bhai]
Promise.all(familypromise).then((message)=>{
    console.log(message)
    console.log("Main khush hu")
}).catch((message)=>{
    console.log(message)
    console.log("Main thoda dukhi hu")
})
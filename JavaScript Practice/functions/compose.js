const twice=(x)=>{x*2}
const sqr=(x)=>{x*x}
const compose=(sqr,twice)=>(value)=>sqr(twice(value))
console.log(compose(sqr,twice)(5))
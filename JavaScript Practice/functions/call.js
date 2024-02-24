const class1={
    name:"Prasanjit",
    takePen:function(pen){
        console.log(this.name+" give my "+pen)
    }
}
const class2={
    name:"Ayushman"
}
class1.takePen.call(class2,"Reynold pen")
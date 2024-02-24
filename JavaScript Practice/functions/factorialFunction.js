function fact(num){
    if(num==0 || num==1) return 1
    res=1
    for(i=1;i<=num;i++){
        res=res*i
    }
    return res
}
a=fact(3)
console.log(a)
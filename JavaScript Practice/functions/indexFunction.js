function findIndex(arr,num){
    let index
    for(let i=0;i<arr.length;i++){
        if(arr[i]==num){
            index=i  
            break
        }
        else index =-1
    }
    return index
}
const arr=[1,5,6,3,8]
console.log(findIndex(arr,5))

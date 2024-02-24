function palindrome(str){
    let split=str.split("")
    let reverse=split.reverse().join("")
    return str==reverse
}
console.log(palindrome("racecar"))

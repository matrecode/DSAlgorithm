let number = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

for (var i = 0; i <= number.length; i++){
    if(number[i] % 3 === 0 && number[i] % 5 === 0){
        console.log("Fizz Buzz")
    }else if(number[i] % 3 === 0){
        console.log("Fizz")
    }else if(number[i] % 5 === 0){
        console.log("Buzz")
    }else{
        console.log(number[i])
    }
}
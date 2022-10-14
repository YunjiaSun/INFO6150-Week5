

function evenOrOdd(number){
    
    
    if(number % 2 === 0){
        console.log(`${number} is even`);
    }else 
        console.log(`${number} is odd`);
   
}

evenOrOdd(6);


function stringEvenOrOdd(string){

    const number = string.length;

    if(number % 2 === 0){
        console.log(`${number} is even`);
    }else 
        console.log(`${number} is odd`);

}


stringEvenOrOdd("hello");


function stringEvenOrOdd(string){


    if(string.length % 2 === 0){
        console.log(`${string.length} is even`);
    }else 
        console.log(`${string.length} is odd`);

}


stringEvenOrOdd("hello");


function checkDinner(string){

    if(string == "hotpot"){
        console.log("Dinner is hotpot");
    }else if(string == "pho"){
        console.log("Dinner is pho");
    }else if(string == "dimsum"){
        console.log("Dinner is dimsum");
    }else{
        console.log("We do not have dinner tonight.");
    }
}

checkDinner("hotpot")


function loop(number){
   
        for (let i = 0; i <= 100; i++){
            if (i % 3 === 0 && 1 % 5 === 0){
                console.log("FizzBuzz")
            }else if(i % 5 === 0){
                console.log("Buzz");
            }else if(i % 3 === 0){
                console.log("Fizz");
            }else{
                console.log(i);
            }
            
            
           
        }

    
}
// loop(15);
loop()
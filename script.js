let form = document.querySelector("form");
let input = document.querySelector("input");
let result = document.querySelector("#result");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    let number = input.value;
    let translate = fizzBuzz(number);
    // console.log("translate",translate);
    result.textContent = translate;
    input.value = "";
});



function fizzBuzz(number){
     
        if (number % 3 === 0 && number % 5 === 0){

            // console.log("FizzBuzz")
            return "FizzBuzz";
            
        }else if(number % 5 === 0){
            return "Buzz";
        }else if(number % 3 === 0){
            return "Fizz";
        }else{
            return number;
        }



}
// loop(15);
// loop()
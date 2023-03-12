let btn = document.getElementById('btn');
let output= document.getElementById('outputtext');

let number = [Math.floor(Math.random() * 100)]

btn.addEventListener('click',function(){
    let input = document.getElementById('userInput').value;
    if(input == number){
        output.innerHTML = "you guessesd right "+" ,"+" it was"+randomNumber;
        }else if (input < number){
        output.innerHTML = "you guessesd too low!"
        output.style.color="green";
    };
    if ( input > number){
        output.innerHTML ="you guessesd too high!"
        output.style.color="red";
    }
});
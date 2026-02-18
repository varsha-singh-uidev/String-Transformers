let main_input = document.querySelector(".input-field");
let upper = document.querySelector(".upper_case");
let lower = document.querySelector(".lower_case");
let camel = document.querySelector(".camel_case");
let pascal = document.querySelector(".pascal_case");
let snake = document.querySelector(".snake_case");
let kebab = document.querySelector(".kebab_case");
let trim = document.querySelector(".trim_case");

main_input.addEventListener("input", function() {
    let text = main_input.value;
    upper.textContent = text.toUpperCase();
    lower.textContent = text.toLowerCase();
    pascal.textContent = text.split(' ').map( word => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`).join('');
    snake.textContent = text.split(' ').join('_');
    trim.textContent = text.split(' ').join('');
    kebab.textContent = text.split(' ').join('-');
    camel.textContent = text.split(' ').map( (word, index) => index===0?`${word.toLowerCase()}`:`${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`).join('');
    
});


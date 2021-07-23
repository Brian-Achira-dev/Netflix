let questions = document.querySelectorAll('.question');
let toggles = document.querySelectorAll('.fa-plus');

questions.forEach(question =>{
    question.addEventListener('click', ()=>{
        let answer = question.nextElementSibling;
        answer.classList.toggle('active')

    });
});
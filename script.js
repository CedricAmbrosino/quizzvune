const form = document.querySelector('form');
const result = document.querySelector('.result');


/*******Formulaires*********/
let questionIndex = -1;
let dataQuizz = [
    {
        question : "Lequel est un oiseau ?",
        sugestion0 : "Ours",
        sugestion1 : "sole",
        sugestion2 : "Pélican",
        sugestion3 : "Oursin",
        answer : 2
    },
    {
        question : "Lequel est un fruit de mer ?",
        sugestion0 : "Ours",
        sugestion1 : "sole",
        sugestion2 : "Pélican",
        sugestion3 : "Oursin",
        answer : 3
    },
    {
        question : "Lequel est un poisson ?",
        sugestion0 : "Ours",
        sugestion1 : "sole",
        sugestion2 : "Pélican",
        sugestion3 : "Oursin",
        answer : 1
    },
    {
        question : "Lequel est un mammifaire ?",
        sugestion0 : "Ours",
        sugestion1 : "sole",
        sugestion2 : "Pélican",
        sugestion3 : "Oursin",
        answer : 0
    }
];

form.innerHTML += dataQuizz.map( (questionQuizz) => `
    <div class="box formbox">
        <h2>${questionQuizz.question}</h2>
        <div class="responses">
            <input type="radio" id="q${++questionIndex}s0" name="answer${questionIndex}" value="0">
            <label for="q${questionIndex}s0">${questionQuizz.sugestion0}.</label>
        </div>
        <div class="responses">
            <input type="radio" id="q${questionIndex}s1" name="answer${questionIndex}" value="1">
            <label for="q${questionIndex}s1">${questionQuizz.sugestion1}.</label>
        </div>
        <div class="responses">
            <input type="radio" id="q${questionIndex}s2" name="answer${questionIndex}" value="2">
            <label for="q${questionIndex}s2">${questionQuizz.sugestion2}.</label>
        </div> 
        <div class="responses">
            <input type="radio" id="q${questionIndex}s3" name="answer${questionIndex}" value="3">
            <label for="q${questionIndex}s3">${questionQuizz.sugestion3}</label>
        </div>        
    </div>
`);

form.innerHTML += '<div class="box"><input type="submit" value="Valider"></div>'


/*****Validation, analyse et résultat *******/

const resultDisplay = () => {
    let success = 0;
    let ratioSuccess = 0;
    let messageh2 = "";
    let messagep = "";
    let radioValue;
    for(let i=0; i<dataQuizz.length; i++){       
       
        if(document.querySelector('input[name="answer'+ i +'"]:checked')!=null){
            radioValue = parseInt(document.querySelector('input[name="answer'+ i +'"]:checked').value)
        }else{
            radioValue = 500;
        }
        if(dataQuizz[i].answer === radioValue){
            success++;
        }
    }
    ratioSuccess = success / dataQuizz.length; 

    if(ratioSuccess >= 0.75){
        messageh2 = "Félicitation !!!";
        messagep = "Vous connaissez le sujet sur le bout des doigts. Continuer à apprendre en suivant les actualités de la thématique.";
    }else if(ratioSuccess >= 0.50){
        messageh2 = "Vous êtes sur la bonne voie !!!";
        messagep = "Vous connaissez le sujet. Continuer à suivre le blog et vous deviendrez un spécialiste du domaine.";    
    }else if(ratioSuccess >= 0.25){
        messageh2 = "Accrochez-vous !!!";
        messagep = "Vous avez des notions sur le sujet. De nombreux articles, vous permermettrons d'enrichir vos connaissance.";    
    }else{
        messageh2 = "Il vous reste tout à découvrir !!!";
        messagep = "Relisez le quizz avec les réponses. Puis continuer votre découverte en lisant les articles du blog.";
    }
    result.innerHTML = `
        <h2>${success}/${dataQuizz.length} ${messageh2}</h2>
        <p>${messagep}</p>
        <button class="button">Retourner au site web</button>
    `;
};

const colorResponse = () => {
    for(let i = 0; i < dataQuizz.length; i++){
        document.querySelector('label[for="q'+ i +'s' + dataQuizz[i].answer +'"]').style.backgroundColor = '#50ff80aa';
    }
};

form.addEventListener('submit', (e) => {
    let heightMoveScroll = 0;
    e.preventDefault();
    resultDisplay();
    colorResponse();
    result.style.display = 'block';
    heightMoveScroll = document.body.clientHeight - window.innerHeight + 400;
    window.scrollTo({ top: heightMoveScroll, left: 0, behavior: 'smooth'});
});
const btnSi = document.querySelector('.botones__btn-si');
const btnNo = document.querySelector('.botones__btn-no');
const randomPic = document.querySelector('.random-pics__cats');
const question = document.querySelector('.question');

const musica = new Audio('/assets/musica/Manu Chao - Me gustas tu.mp3');

// Si acepta: 
btnSi.addEventListener('click', ()=>{
    randomPic.src = '/assets/fotos/0.jpg';
    question.innerText = ' Sabia que me dirias que si 😌 Te amo mucho osita hermosa, eres la mejor del mundo, gracias por estar conmigo y por acompañarme estos casi 5 años juntos 🥹❤️ Lo siento si me he demorado mucho, pero esto es lo poco que pude hacer en unas horas :) ';
    question.classList.add('question-style');


    btnSi.style.display = 'none';
    btnNo.style.display = 'none';

    musica.play();


})


// Lógica: 

let contador = 0;

btnNo.addEventListener('click', ()=>{

        switch (contador) {
            
            case 0:
                btnNo.innerText = 'Segura :(?';
                btnSi.classList.add('estilo-1');
                randomPic.src = '/assets/fotos/2.jpg'
                break;
            
            case 1:
                btnNo.innerText = 'Segurísima Osita :(?';
                btnSi.classList.add('estilo-2');
                randomPic.src = '/assets/fotos/3.jpg'
                break;
        
            case 2:
                btnNo.innerText = ' De verdad :( ?';
                btnSi.classList.add('estilo-3');
                randomPic.src = '/assets/fotos/4.jpg'

                break;

            case 3:
                btnNo.innerText = 'Ni modo...';
                btnSi.classList.add('estilo-4');
                randomPic.src = '/assets/fotos/5.jpg'

                break;

            case 4:
                btnNo.innerText = ' Di que si MRD... ';
                btnSi.classList.add('estilo-5');
                randomPic.src = '/assets/fotos/6.jpg'

                break;

        }

        contador++
        
})





const button = document.getElementById("openBtn");
const letter = document.getElementById("letter");
const music = document.getElementById("music");

button.addEventListener("click", () => {

    letter.classList.toggle("hidden");

    if(letter.classList.contains("hidden")){
        button.innerHTML="💌 Open My Heart";
    }else{
        button.innerHTML="🤍 Close Letter";
    }

    if(music.paused){
        music.play().catch(()=>{});
    }

});

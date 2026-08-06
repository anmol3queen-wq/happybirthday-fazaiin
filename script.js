const heartBtn = document.getElementById("heartBtn");
const letter = document.getElementById("letter");

heartBtn.addEventListener("click", () => {

    if(letter.classList.contains("hidden")){

        letter.classList.remove("hidden");
        heartBtn.innerHTML = "🤍 Close Letter";

    }else{

        letter.classList.add("hidden");
        heartBtn.innerHTML = "💌 Open My Heart";

    }

});

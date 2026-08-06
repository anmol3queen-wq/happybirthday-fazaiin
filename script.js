const button = document.getElementById("heartBtn");
const letter = document.getElementById("letter");

button.addEventListener("click", () => {
  letter.classList.toggle("hidden");

  if(letter.classList.contains("hidden")){
      button.innerHTML = "💌 Open My Heart";
  }else{
      button.innerHTML = "❤️ Close Letter";
  }
});
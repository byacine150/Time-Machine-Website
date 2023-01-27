const form = document.getElementById("date-form");

form.addEventListener("submit", async function(event){
  event.preventDefault();
  const date = form.querySelector('input[type="search"]').value;
  window.location.href = `info.html?date=${date}`;
})
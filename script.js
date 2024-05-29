const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const formTitle = document.getElementById("formTitle");
const card = document.getElementById("card");
const spinner = document.getElementById("spinner");
const scriptURL = "https://script.google.com/macros/s/AKfycbwd5g0oRx2kkgjf5hdoAbQsjgaT77bm54tUM4gEwmtFg3ehGpV7GJDVlGuL4iQJQcesGg/exec";

form.addEventListener('submit', e => {
  submitButton.disabled = true;
  card.classList.add('loading');
  e.preventDefault();
  let requestBody = new FormData(form);
  fetch(scriptURL, { method: 'POST', body: requestBody })
    .then(response => {
      card.classList.remove('loading');
      card.classList.add('success');
      formTitle.textContent = "Successfully sent";
      form.style.display = "none";
      submitButton.disabled = false;
    })
    .catch(error => {
      console.error('Error:', error.message);
      card.classList.remove('loading');
      submitButton.disabled = false;
    });
});

let resultCont = document.getElementById("resultCont");
let loading=document.getElementById('loading');
let submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    loading.classList.toggle('show');
  let apikey = "ema_live_OaTGrQZN8Ar3TGvGuQlIQYrNdlLnazPZIGqabj95";
  let email = document.getElementById("email").value;
  let url = `https://api.emailvalidation.io/v1/info?apikey=${apikey}&email=${email}`;
  let res=await fetch(url);
  let result=await res.json();
  let str = ``;
  for (key of Object.keys(result)) {
    if(result[key] !== "" && result[key] !== " ")
    str = str + `<div>${key} : ${result[key]}</div>`;
  }
  loading.classList.toggle('show');

  resultCont.innerHTML = str;
});

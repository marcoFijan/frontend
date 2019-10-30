var list = document.querySelector('.trainingList');
var email = document.getElementById('email');
var sentButton = document.querySelector('footer form fieldset button');
var form = document.querySelector('footer form fieldset')

list.addEventListener('click', function(e){
  if(e.target.className == 'deleteButton'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});

sentButton.addEventListener('click', function(e){
  e.preventDefault();

  if(email.checkValidity()){
    if(form.querySelector('p') != null){
      const p = form.querySelector('p');
      form.removeChild(p);
    }

    const emailInput = email.value;
    var update = document.createElement("P");
    update.innerHTML = "Email verzonden naar " + emailInput + "!";
    console.log(update);
    form.appendChild(update);
  }

})

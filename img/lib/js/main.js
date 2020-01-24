$(function () {
    $('[data-toggle="popover"]').popover()
  });

  function raschitat() {
    col  = document.getElementById('col').value;
    month  = document.getElementById('month').value;
    if(col == ""){
    alert("Укажите количество бытовок"); 
    }   
    else if(col<0){
      alert("Введите корректное количество бытовок")
    }
    else if(month == ""){
        alert("Укажите количество месяцев")
    }
    else if(month<0){
      alert("Введите корректное количество месяцев")
    }
    else {
    prise = parseFloat (col)* parseFloat(month)* 4500;
    document.getElementById('prise-calc').innerHTML = prise +"р.";
    }
    }

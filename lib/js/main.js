$(function () {
    $('[data-toggle="popover"]').popover()
  });

  function raschitat() {
    col  = document.getElementById('col').value;
    month  = document.getElementById('month').value;
    if(col == ""){
      document.getElementById('col-byt').innerHTML="Укажите количество бытовок!"; 
    }   
    else if(col<=0){
      document.getElementById('col-byt').innerHTML="Введите корректное количество бытовок!"
    }
    else if(month == ""){
      document.getElementById('col-month').innerHTML="Укажите количество месяцев!"
    }
    else if(month<=0){
      document.getElementById('col-month').innerHTML="Введите корректное количество месяцев!"
    }
    else {
    prise = parseFloat (col)* parseFloat(month)* 4500;
    document.getElementById('prise-calc').innerHTML = prise +"р.";
    }
    }

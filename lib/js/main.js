$(function () {
    $('[data-toggle="popover"]').popover()
  });

  function raschitat() {
    col  = document.getElementById('col').value;
    month  = document.getElementById('month').value;
    if(col == ""){
    alert("Вы не указали ширину");    
    }else if(month == ""){
        alert("укажите количество месяцев")
    }
    else {
    prise = parseFloat (col)* parseFloat(month)* 4500;
    document.getElementById('prise-calc').innerHTML = prise +"р.";
    }
    }

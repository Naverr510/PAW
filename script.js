(function () {
  ex1_button.onclick=function(){   

    var tabela=[]   

    for(var i=0;i<=9;i++)   

    {     

      tabela.push(i);   

    }     

    ex1_content.innerHTML=tabela.toString(); 

  } 

  ex2_text.addEventListener('input', function() {
    var value = this.value;
    var message = '';

    if (value.length !== 9) {
      message = 'Długość numeru musi być równa 9';
    } else if (/[a-zA-Z]/.test(value)) {
      message = 'Numer nie może zawierać liter';
    } else if (/[^0-9]/.test(value)) {
      message = 'Numer nie może zawierać znaków specjalnych';
    } else {
      message = 'Numer telefonu jest poprawny';
    }

    ex2_content.innerHTML = message;
  });
})();
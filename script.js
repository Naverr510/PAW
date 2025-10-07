(function () {
  ex1_button.onclick=function(){   

    var tabela=[]   

    for(var i=0;i<=9;i++)   

    {     

      tabela.push(i);   

    }     

    ex1_content.innerHTML=tabela.toString(); 

  } 
})();

(function () {
  ex2_text.addEventListener('input', function() {
    var tekst = ex2_text.value;
    var komunikat = '';
    
    if (tekst.length !== 9) {
      komunikat = 'Długość numeru musi być równa 9';
    } else if (/[a-zA-Z]/.test(tekst)) {
      komunikat = 'Numer nie może zawierać liter';
    } else if (/[^0-9]/.test(tekst)) {
      komunikat = 'Numer nie może zawierać znaków specjalnych';
    } else {
      komunikat = 'Numer telefonu jest poprawny';
    }
    
    ex2_content.innerHTML = komunikat;
  });
})();
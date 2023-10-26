


function menuOpenClose() {

    var atv = false;
    var lista = document.querySelector("body > header > div > nav > ul");
    var menu = document.querySelector("body > header > div > nav > div");
    var largura = 0;

    window.addEventListener('load', menuOpenClose);
    window.addEventListener('resize', menuOpenClose);

    menu.style.display = 'block';
    lista.style.display = 'none';
    largura = document.documentElement.clientWidth;
    if (largura <= 770) {
      menu.addEventListener('click', () => {
        atv = !atv;
        if (atv) {
          console.log('ok');
          lista.style.display = 'block';
        //   lista.classList.add('lista-menu');
          lista.addEventListener('click', () => {
            atv = false; lista.style.display = 'none';
            ;
          });

        } else {
          lista.style.display = 'none';

        }
      });
    } else {
      lista.style.display = 'flex';
    //   lista.classList.remove('lista-menu');
      menu.style.display = 'none';

    }
  }

  function scrolItem() {
    $('#Home > div > nav > ul > li > a').click(function () {
        var ref = '#' + $(this).attr('href');
        if(ref == '#Home'){
          var offset = $('html').offset().top;
        }else{
          var offset = $(ref).offset().top - 60;
          // 60 - porque quando eu clico ele vai direto para o card-body o valor do card-header e 50 e os outros 10 e para deixar um espaçamento
        }
        $('html,body').animate({ 'scrollTop': offset });   

  return false;
});
}
function heightOrdem() {
  
  var altura = $('header').outerHeight();
  $('.banner').css('margin-top', altura + 'px');
  $('header ul').css('top', altura + 'px');

}

heightOrdem();
menuOpenClose();
scrolItem();

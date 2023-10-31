


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
    menu.addEventListener('click', function() {
      atv = !atv;
      if (atv) {
       
        lista.style.display = 'block';
        lista.addEventListener('click', () => {
          atv = false; lista.style.display = 'none';
          
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
    if (ref == '#Home') {
      var offset = $('html').offset().top;
    } else {
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

function TrocaPoema() {
  var Poemas = [
    `
    <p>Escolha um Poema Acima</p>
    `
    ,
    `
  <blockquote cite="Carlos Drummond de Andrade">
  <p><strong><em>José</em></strong><br><br>
  E agora, José?<br>
  A festa acabou,<br>
  a luz apagou,<br>
  o povo sumiu,<br>
  a noite esfriou,<br>
  e agora, José?<br>
  e agora, você?<br>
  você que é sem nome,<br>
  que zomba dos outros,<br>
  você que faz versos,<br>
  que ama, protesta?<br>
  e agora, José?<br><br>
  Está sem mulher,<br>
  está sem discurso,<br>
  está sem carinho,<br>
  já não pode beber,<br>
  já não pode fumar,<br>
  cuspir já não pode,<br>
  a noite esfriou,<br>
  o dia não veio,<br>
  o bonde não veio,<br>
  o riso não veio,<br>
  não veio a utopia<br>
  e tudo acabou<br>
  e tudo fugiu<br>
  e tudo mofou,<br>
  e agora, José?<br><br>
  E agora, José?<br>
  Sua doce palavra,<br>
  seu instante de febre,<br>
  sua gula e jejum,<br>
  sua biblioteca,<br>
  sua lavra de ouro,<br>
  seu terno de vidro,<br>
  sua incoerência,<br>
  seu ódio — e agora?<br><br>
  Com a chave na mão<br>
  quer abrir a porta,<br>
  não existe porta;<br>
  quer morrer no mar,<br>
  mas o mar secou;<br>
  quer ir para Minas,<br>
  Minas não há mais.<br>
  José, e agora?<br><br>
  Se você gritasse,<br>
  se você gemesse,<br>
  se você tocasse<br>
  a valsa vienense,<br>
  se você dormisse,<br>
  se você cansasse,<br>
  se você morresse...<br>
  Mas você não morre,<br>
  você é duro, José!<br><br>
  Sozinho no escuro<br>
  qual bicho-do-mato,<br>
  sem teogonia,<br>
  sem parede nua<br>
  para se encostar,<br>
  sem cavalo preto<br>
  que fuja a galope,<br>
  você marcha, José!<br>
  José, para onde?</p>
  </blockquote>`
  
    ,

    `
<blockquote cite=" Kamila, Vitória e João Victor - 3ªE">
<p><strong><em>Xenofobia</em></strong><br><br>
Esse peso que carrego<br>
Não é fácil de lidar<br>
Nem sequer de compreender<br><br>

Carregar uma imagem <br>
De quem não tem capacidade de aprender<br>
E de quem jamais terá a oportunidade <br>
De na vida crescer.<br><br>

Julgam meu sotaque<br>
E até meu conhecer<br>
Por que me inferiorizas<br>
Se sou como você?<br><br>

Neste fardo que transporto<br>
Há uma história a revelar<br>
Uma jornada de esforço e mérito<br>
Que muitos não podem apreciar<br><br>

Cada sotaque é uma cor<br>
Na vasta paleta da humanidade<br>
Não julgue pelas palavras que ouve<br>
Pois a diversidade é nossa realidade<br><br>

Não subestime meu valor<br>
Por diferenças que possam parecer<br>
Somos todos feitos de sonhos e amor<br>
Na mesma busca por pertencer<br>

Nessa luta constante, resisto e insisto<br>
Com orgulho nordestino, meu coração é forte<br>
Nas terras do sol ardente, sigo persistindo<br>
Com esperança, fé e muita sorte<br><br>

Somos fortes, unidos na diversidade<br>
Nossas raízes são profundas como o sertão<br>
Nossa força cresce, na adversidade<br>
Com amor e esperança, no coração<br>
Nas terras do sol, construímos nossa nação.<br>
</p>
</blockquote>

`
  ];
  $('#Sarau > div.poemasSaral > div.navegar > button').click(function(){
    console.log('ok');
    var idx = $(this).index();
    var conteudo = $('#Sarau > div.poemasSaral > div.center .conteudo');
    conteudo.html(Poemas[idx]);

  });
}
function PlayMusic() {

  let musicas =
    ['audio/Baiana-Carlinhos Brown e Marcio Mello.mp3', 'audio/Canção do exilio-GonçalvesDias.mp3'];
  let audio = new Audio();
  let idx = [-1, -1];
  let ativado = false;

  $("section#Sarau").delegate(".selectMusica .play", "click", function () {

    idx.push($(this).parent().index());
    idx.shift();

    if (idx[0] == idx[1]) {
      ativado = ativado == true ? false : true;
    } else if (idx[0] != idx[1]) {
      ativado = true;
    }

    const images = $(".play img");
    images.attr("src", "imagens/play.png");
    
  


    if(ativado){
      audio.src = musicas[idx[1]];
      audio.play();
      
      let img = $(this).children("img")[0];
      img.src = 'imagens/pause.png';
    }else{
      audio.pause();
    }
    console.log(idx[0] + " / " + idx[1] + " / " + ativado);

  });
}
PlayMusic();
TrocaPoema();
heightOrdem();
menuOpenClose();
scrolItem();

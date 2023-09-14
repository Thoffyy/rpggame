// valores iniciais e referencias para evoluções
var vidaGuerreiro = 50;
var danoGuerreiro = 10;
var vidaArqueiro = 30;
var danoArqueiro = 20;
var vidaMago = 20;
var danoMago = 30;


//imagens:
    var imagemGuerreiro = "image1.png"
    var imagemArqueiro = "image2.png"
    var imagemMago = "image3.png"

    function Personagem (classe, vida, dano, imagem){
    this.classe = classe;
    this.vida = vida;
    this.dano = dano;
    this.imagem = imagem;
    }

    var personagemGuerreiro;
    var personagemArqueiro;
    var personagemMago;
    var personagens;

    function criarPersonagens(){
        personagemGuerreiro = new Personagem("Guerreiro", vidaGuerreiro, danoGuerreiro, imagemGuerreiro);
        personagemArqueiro = new Personagem("Arqueiro", vidaArqueiro, danoArqueiro, imagemArqueiro);
        personagemMago = new Personagem("Mago", vidaMago, danoMago, imagemMago);
        personagens = [personagemGuerreiro, personagemArqueiro, personagemMago];
    }

    criarPersonagens()









//evolve system:

    var pontosParaEvolucao = 1;
    var pontosAoEvoluir = 5;

    function atualizarPontosEvolucao(){
        $("#pontosEvolucaoid").html(pontosParaEvolucao);
        atualizarbuttonDisable();
    }

    function atualizarbuttonDisable (){
        if(pontosParaEvolucao <=0){
            $(".botaoUpdate").attr("disabled", true);
        
        }
        else{
            $(".botaoUpdate").attr("disable", false);
        }
    }







    //dano e vida sistems:

    function evoluirDano(classe){
        pontosParaEvolucao -= 1;

        switch(classe){
            case "guerreiro":
                danoGuerreiro += pontosAoEvoluir;
                $("GuerreiroDanoId").html(danoArqueiro);
                break;

                case "arqueiro":
                danoArqueiro += pontosAoEvoluir;
                $("#ArqueiroDanoId").html(danoArqueiro);
                break;

                case "mago":
                danoMago += pontosAoEvoluir;
                $("#MagoDanoId").html(danoMago);
                break;
       }
       atualizarPontosEvolucao()
}

function evoluirVida(classe){
    pontosParaEvolucao -= 1;
 
    switch(classe) {

        case "guerreiro":
          vidaGuerreiro += pontosAoEvoluir;
          $("#GuerreiroVidaId").html(vidaGuerreiro);
          break;
    
        case "arqueiro":
          vidaArqueiro += pontosAoEvoluir;
          $("#ArqueiroVidaId").html(vidaArqueiro);
          break;
    
        case "mago":
          vidaMago += pontosAoEvoluir;   
          $("#MagoVidaId").html(vidaMago);
          break;
    
      }
      atualizarPontosEvolucao();
    }

    function inimigo (nome, vida, dano, imagem){
        this.nome = nome;
        this.vida = vida;
        this.dano = dano;
        this.imagem = imagem;
    }

    var inimigos[];

    function criarinimigos(){
        var orc = new inimigo("Orc", 20, 10, "image4.png");
        var orcShaman = new inimigo("Orc Shaman" 20, 30, "image5.png");
        var orcChefe = new inimigo ("Orc Chefe", 50, 10, "image6.png");
        var orcs = [orc, orcShaman, orcChefe];

        var esqueleto = new Inimigo("Esqueleto", 10, 20, "img07.png");
        var zumbi = new Inimigo("Zumbi", 20, 30, "img08.png");
        var zumbiChefe = new Inimigo("Zumbi Chefe", 30, 50, "img09.png");
        var mortosvivos = [esqueleto, zumbi, zumbiChefe];

        var imp = new Inimigo("Imp", 20, 20, "img10.png");

        var demonio = new Inimigo("Demônio", 30, 30, "img11.png");
        var demonioChefe = new Inimigo("Demônio Chefe", 50, 40, "img12.png");
        var demonios = [imp, demonio, demonioChefe];
      
      
        inimigos = [orcs, mortosvivos, demonios];

    }

 // battle config:


var indexPersonagem = 1;
var indexGrupoinimigos;
var indexInimigoAlvo;

    function selecionarInimigos(){
        indexGrupoInimigos = $("#selecaoInimigosId").val();

        var htmlOptions = "";

        for(var i=0; i<3; i++) {
            htmlOptions += "<option value= " + i + ">" + inimigos[indexGrupoInimigos][i].nome + "</option>";   
        }
    
$("#inimigosEscolhidosId").html(htmlOptions);
    atualizarDadosAlvo();
}

function atualizarDadosAlvo() {
    indexInimigoAlvo = parseInt($("#inimigosEscolhidosId").val());

    $("#vidaInimigoId").html(inimigos[indexGrupoInimigos][indexInimigoAlvo].vida);
    $("#danoInimigoId").html(inimigos[indexGrupoInimigos][indexInimigoAlvo].dano);
    $("#imagemInimigoId").attr("src", inimigos[indexGrupoInimigos][indexInimigoAlvo].imagem);
    
  }
































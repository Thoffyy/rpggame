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


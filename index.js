import express from "express"
import cors from "cors"
import bodyParser from "body-parser";

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }));

//nada

const port = process.env.PORT || 3002




const listaPresentes = [ 
    
    
    {id:6, title:'Colheres',    src:'./imagens/colheres-plastico.jpg', disponivel: true,},
    
    
    {id:13, title:'Kit Forma Anti-aderente',    src:'./imagens/forma-bolo.jpg', disponivel: true,},
    {id:14, title:'Frigideiras Anti-aderente ',    src:'./imagens/frigideiras.jpg', disponivel: true,},
    
    
    {id:17, title:'Kit Banheiro ',    src:'./imagens/kit-banheiro.jpg', disponivel: true,},
    {id:19, title:'Kit Formas c/fundo Removível ',    src:'./imagens/kit-forma-bolo-fundo-removivel.jpg', disponivel: true,},
{id:68, title:'Panela de Pressão',    src:'./imagens/panela-de-pressao.jpg', disponivel: true,},
    
    {id:70, title:'Líquidificador',    src:'./imagens/liquidificador.jpg', disponivel: true,},
    {id:71, title:'Ventilador.jpg',    src:'./imagens/ventilador', disponivel: true,},
    {id:72, title:'Kit Colheres Inóx',    src:'./imagens/kit-colheres-inox.jpg', disponivel: true,},
    {id:20, title:'Kit Leiteira ',    src:'./imagens/kit-leiteira.jpg', disponivel: true,},
    {id:21, title:'Porta Mantimentos ',    src:'./imagens/kit-porta-mantimentos.jpg', disponivel: true,},
    {id:22, title:'Jogo de Toalhas - Rosto e Banho 3 ',    src:'./imagens/kit-toalha-corpo-rosto.jpg', disponivel: true,},
    {id:23, title:'Kit Assadeira',    src:'./imagens/kit-travessa-inox.jpg', disponivel: true,},
    {id:24, title:'Kit Travessas - Vidro',    src:'./imagens/kit-travessa-vidro.jpg', disponivel: true,},
    
    
   
    
    {id:29, title:'Tábua de Passar',    src:'./imagens/tabua-passar-roupa.jpg', disponivel: true,},
    {id:31, title:'Taças - Sobremesa',    src:'./imagens/kit-sobremesa_2.png', disponivel: true,},
    {id:32, title:'Kit Tapetes para Banheiro',    src:'./imagens/tapete-banheiro.jpg', disponivel: true,},
    {id:33, title:'Panela de Arroz Elétrica',    src:'./imagens/panela-arroz-eletrica.jpg', disponivel: true,},
    {id:3, title:'Rede Cadeira de Balanço',    src:'./imagens/rede-cadeira-balanco.png', disponivel: true,},
    {id:2, title:'Rede Gigante - Cinza',    src:'./imagens/rede-gigante.jpg', disponivel: true,},
    
    
    {id:50, title:'Jogo de Toalha - Rosto e Banho 2',    src:'./imagens/jogo-toalha-balho2.jpg', disponivel: true,},
    {id:35, title:'Kit Colcha de Cama - Queen',    src:'./imagens/colcha-cama-queen.jpg', disponivel: true,},
    {id:36, title:'Kit Colcha de Cama - Queen-2',    src:'./imagens/colcha-cama-queen2.jpg', disponivel: true,},
    
    {id:38, title:'Jogo de Lençol - Queen',    src:'./imagens/jogo-lencol.jpg', disponivel: true,},
    {id:60, title:'Cortinas Blackout',    src:'./imagens/cortina-blackout.jpg', disponivel: true,},
    {id:61, title:'Kit Cabides de Madeira',    src:'./imagens/kit-cabides-madeira.jpg', disponivel: true,},
    {id:62, title:'Kit Depósitos de Mantimento',    src:'./imagens/kit-depositos-mantimentos.jpg', disponivel: true,},
    {id:63, title:'Kit Vasoura, Rodo e Pá',    src:'./imagens/kit-masoura-rodo-pa.png', disponivel: true,},
    {id:64, title:'Kit Organizador Pia, Balcão',    src:'./imagens/kit-organizador-pia.jpg', disponivel: true,},
    {id:65, title:'Kit Peneiras Inóx',    src:'./imagens/kit-peneiras.jpg', disponivel: true,},
    {id:66, title:'Kit Ralador',    src:'./imagens/kit-ralador.jpg', disponivel: true,},
    {id:67, title:'Tábua de Corte',    src:'./imagens/taboa-cortar-carne.jpg', disponivel: true,},
    
    {id:41, title:'Jogo Panelas Anti-aderente',    src:'./imagens/kit-panelas-ante-aderente.jpg', disponivel: true,},
    {id:42, title:'Kit Tapetes para Banheiro',    src:'./imagens/kit-tapete-banheiro-2.jpg', disponivel: true,},
    {id:43, title:'Kit Tapetes para Cozinha',    src:'./imagens/kit-tapete-cozinha.jpg', disponivel: true,},
    {id:44, title:'Kit Tapetes para Cozinha',    src:'./imagens/kit-tapete-cozinha-2.jpg', disponivel: true,},
    {id:45, title:'Lençol Elástico - Queen',    src:'./imagens/lencol-elastico.jpg', disponivel: true,},
    
    {id:47, title:'Mini-processador de Alimentos',    src:'./imagens/mini-processador.jpg', disponivel: true,},
    {id:52, title:'Jogo Panelas de Alumínio',    src:'./imagens/jogo-panelas-aluninio.jpg', disponivel: true,}, {id:54, title:'Churrasqueira Móvel',    src:'./imagens/churrasqueira.jpg', disponivel: true,},
    
]

app.get('/', (req,res)=>{
  return res.json('servidor rodando...')
})
app.get('/lista', (req, res) => {
  res.json(listaPresentes)
});


app.delete('/lista/:id',  (req,res)=>{
  const {id} = req.params;
  
const itemRomovido =  listaPresentes.find((e) => e.id == id)
const index = listaPresentes.indexOf(itemRomovido)
listaPresentes.splice(index, 1)


  res.send(res.status(204).json("ok"));
 
})




app.listen(port, () => {
  console.log('Servidor rodando na porta 3002');
});



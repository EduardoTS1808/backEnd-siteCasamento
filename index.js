import express from "express"
import cors from "cors"
import bodyParser from "body-parser";

const app = express()

app.use(express.json())
app.use(bodyParser.json())
app.use(cors())


app.use(bodyParser.urlencoded({ extended: true }));



const port = process.env.PORT || 3002




const listaPresentes = [ 
    {id:4, title:'Boleira',    src:'./imagens/boleira.jpg', disponivel: true,},
    {id:5, title:'Cafeteira',    src:'./imagens/cafeteira-grafite.jpg', disponivel: true,},
    {id:6, title:'Colheres',    src:'./imagens/colheres-plastico.jpg', disponivel: true,},
    {id:7, title:'Conjunto de Xicaras',    src:'./imagens/conjunto-xicaras.jpg', disponivel: true,},
    {id:9, title:'Copos de Vidro',    src:'./imagens/copos.jpg', disponivel: true,},
    {id:11, title:'Faqueiro Completo ',    src:'./imagens/faqueiro-completo.jpg', disponivel: true,},
    {id:12, title:'Kit Facas ',    src:'./imagens/faqueiro-so-facas.jpg', disponivel: true,},
    {id:13, title:'Kit Forma Antiaderente',    src:'./imagens/forma-bolo.jpg', disponivel: true,},
    {id:14, title:'Frigideiras Anteaderente ',    src:'./imagens/frigideiras.jpg', disponivel: true,},
    
    {id:16, title:'Jarra de Vidro ',    src:'./imagens/jarra-vidro.jpg', disponivel: true,},
    {id:17, title:'Kit Banheiro ',    src:'./imagens/kit-banheiro.jpg', disponivel: true,},
    {id:19, title:'Kit Formas c/fundo Removível ',    src:'./imagens/kit-forma-bolo-fundo-removivel.jpg', disponivel: true,},
    {id:20, title:'Kit Leiteira ',    src:'./imagens/kit-leiteira.jpg', disponivel: true,},
    {id:21, title:'Porta Mantimentos ',    src:'./imagens/kit-porta-mantimentos.jpg', disponivel: true,},
    {id:22, title:'Jogo de Toalhas - Rosto e Banho 3 ',    src:'./imagens/kit-toalha-corpo-rosto.jpg', disponivel: true,},
    {id:23, title:'Kit Assadeira',    src:'./imagens/kit-travessa-inox.jpg', disponivel: true,},
    {id:24, title:'Kit Travessas - Vidro',    src:'./imagens/kit-travessa-vidro.jpg', disponivel: true,},
    
    {id:27, title:'Ferro de Passar',    src:'./imagens/ferro-passar.jpg', disponivel: true,},
    {id:1, title: 'Kit Pratos', src:'./imagens/aparelho-de-jantar.jpg', disponivel: true,},
    {id:51, title: 'Cuscuzeira', src:'./imagens/cuscuzeira.jpg', disponivel: true,},
    {id:29, title:'Tábua de Passar',    src:'./imagens/tabua-passar-roupa.jpg', disponivel: true,},
    {id:31, title:'Taças - Sobremesa',    src:'./imagens/kit-sobremesa_2.png', disponivel: true,},
    {id:32, title:'Kit Tapetes para Banheiro',    src:'./imagens/tapete-banheiro.jpg', disponivel: true,},
    {id:33, title:'Panela de Arroz Elétrica',    src:'./imagens/panela-arroz-eletrica.jpg', disponivel: true,},
    {id:3, title:'Rede Cadeira de Balanço',    src:'./imagens/rede-cadeira-balanco.png', disponivel: true,},
    {id:2, title:'Rede Gigante - Cinza',    src:'./imagens/rede-gigante.jpg', disponivel: true,},
    {id:30, title:'Rede Gigante - Bege',    src:'./imagens/rede-gigante-2.jpg', disponivel: true,},
    {id:34, title:'Jogo de Toalha - Rosto e Banho',    src:'./imagens/jogo-toalha-balho.jpg', disponivel: true,},
    {id:50, title:'Jogo de Toalha - Rosto e Banho 2',    src:'./imagens/jogo-toalha-balho2.jpg', disponivel: true,},
    {id:35, title:'Kit Colcha de Cama - Queen',    src:'./imagens/colcha-cama-queen.jpg', disponivel: true,},
    {id:36, title:'Kit Colcha de Cama - Queen-2',    src:'./imagens/colcha-cama-queen2.jpg', disponivel: true,},
    {id:37, title:'Espremedor de Frutas - 1,5L',    src:'./imagens/espremedor-frutas-1,5l.jpg', disponivel: true,},
    {id:38, title:'Jogo de Lençol - Queen',    src:'./imagens/jogo-lencol.jpg', disponivel: true,},
    {id:39, title:'Kit Escorredor Inox',    src:'./imagens/kit-escorredor-inox.jpg', disponivel: true,},
    {id:40, title:'Jogo Lençol Fino - Queen',    src:'./imagens/kit-lencol-fino.jpg', disponivel: true,},
    {id:41, title:'Jogo Panelas Anteaderente',    src:'./imagens/kit-panelas-ante-aderente.jpg', disponivel: true,},
    {id:42, title:'Kit Tapetes para Banheiro',    src:'./imagens/kit-tapete-banheiro-2.jpg', disponivel: true,},
    {id:43, title:'Kit Tapetes para Cozinha',    src:'./imagens/kit-tapete-cozinha.jpg', disponivel: true,},
    {id:44, title:'Kit Tapetes para Cozinha',    src:'./imagens/kit-tapete-cozinha-2.jpg', disponivel: true,},
    {id:45, title:'Lençol Elástico - Queen',    src:'./imagens/lencol-elastico.jpg', disponivel: true,},
    {id:46, title:'Mop Esfregão Giratório',    src:'./imagens/mop-esfregao-giratorio.jpg', disponivel: true,},
    {id:47, title:'Mini-processador de Alimentos',    src:'./imagens/mini-processador.jpg', disponivel: true,},
    {id:52, title:'Jogo Panelas de Alumínio',    src:'./imagens/jogo-panelas-aluninio.jpg', disponivel: true,},
    {id:53, title:'Cesto - Roupas Sujas - 55L',    src:'./imagens/cesto-roupas.jpg', disponivel: true,},
    {id:54, title:'Churrasqueira Móvel',    src:'./imagens/churrasqueira.jpg', disponivel: true,},
    
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


  res.status(204).json("ok")
 
})




app.listen(port, () => {
  console.log('Servidor rodando na porta 3002');
});



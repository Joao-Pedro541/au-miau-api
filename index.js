
const express = require('express')

const app = express()
const port = 3000

// cria um array com os serviços com id e descrição
var servicos = [
  {id: 1, nome: 'banho', descrição: "Banho completo para cães e catos"},
  {id: 2, nome: 'brinquedos', descrição: "Brinquedos para pets"},
  {id: 3, nome: 'saude', descrição: "Atendimento clínico para pets"},
  {id: 4, nome: 'alimentos', descrição: "Alimentos para pets"}
]

// cria a entrada do site sem nenhuma direção
app.get('/', (req, res) => {
  res.send('olá seja bem-vindo(a) para o site da AuMiau. Esperamos que encontre o que procura')
})


//retorna quais os serviços que tem para a entrada /servicos junto com o texto do mesmo
function SeguintesServiços(res){
    let result = ''
    for (let serv in servicos){
        let name = servicos[serv].nome
        result += name + ','
    }
    res.send('na AuMiau oferecemos os seguintes serviços: ' + result)
}

// entrada que apresenta cada serviço do site, 
app.get('/servicos', (req, res) => {
  SeguintesServiços(res)
})

// cria e modifica cada serviço com sua  própria entrada no /servicos/
for (let serv in servicos){
        let name = servicos[serv].nome
        app.get('/servicos/'+name, (req, res) => {res.send(servicos[serv].descrição)})
    }

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


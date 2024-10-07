const endereco = "https://raw.githubusercontent.com/guilhermeonrails/api/refs/heads/main/dados-globais.json"

async function visualizarInformacoesGlobais(){
    const resposta = await fetch(endereco)
    const dados = await resposta.json()
    console.log(dados)
    console.log("Total de pessoas no mundo: "+dados.total_pessoas_mundo);
}

visualizarInformacoesGlobais()
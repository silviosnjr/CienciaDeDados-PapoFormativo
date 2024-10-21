const endereco = "https://raw.githubusercontent.com/guilhermeonrails/api/refs/heads/main/dados-globais.json"

async function visualizarInformacoesGlobais(){
    const resposta = await fetch(endereco)
    const dados = await resposta.json()
    //console.log(dados)

    const paragrafo = document.createElement("p")
    paragrafo.classList.add("graficos-container__texto")

    paragrafo.innerHTML = `
        Você sabia que o mundo tem <span>${dados.total_pessoas_mundo} bilhões</span> de pessoas que aproximadamente <span>${dados.total_pessoas_conectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}  horas </span>conectadas.
        Isso significa que aproximadamente <span>63.89%</span> de pessoas conectadas em alguma rede social.
    `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)

}

visualizarInformacoesGlobais()
const endereco = "https://raw.githubusercontent.com/guilhermeonrails/api/refs/heads/main/dados-globais.json"

async function visualizarInformacoesGlobais(){
    const resposta = await fetch(endereco)
    const dados = await resposta.json()
    //console.log(dados)

    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const pessoasConectadas = (dados.total_pessoas_conectadas / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) * 60)
    const percentual = ((pessoasConectadas / pessoasNoMundo)*100).toFixed(2)

    const paragrafo = document.createElement("p")
    paragrafo.classList.add("graficos-container__texto")

    paragrafo.innerHTML = `
        Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em média <span>${horas} horas </span> e <span>${minutos} minutos </span>conectadas. <br>Isso significa que aproximadamente <span>${percentual} %</span> pessoas conectadas em alguma rede social.
    `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)

}

visualizarInformacoesGlobais()
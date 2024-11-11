import { getCSS } from "./common.js"
async function quantidadesUsuarios(){
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'
    const res = await fetch(url)
    const dados = await res.json()

    const nomeDasRedes = Object.keys(dados)
    const quantidadesUsuarios = Object.values(dados)

    const data = [
        {
            x : nomeDasRedes,
            y : quantidadesUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }          
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
           text: "Redes sociais com mais usuários no mundo",
           font: {
              color: getCSS('--primary-color'),
              family: getCSS('--font'),
              size: 30,
           }
        }
    
    }


    const grafico = document.createElement("div")
    grafico.className = 'grafico'
        
    document.getElementById("graficos-container").appendChild(grafico);
    Plotly.newPlot(grafico, data, layout)
}

quantidadesUsuarios()
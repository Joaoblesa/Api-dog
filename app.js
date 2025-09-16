'use strict'

const botaoPesquisar = document.getElementById('btn')

async function buscarImagens(raca) {
    const url = `https://dog.ceo/api/breed/${raca}/images`
    const response = await fetch(url)
    const imagens = await response.json()
    // Retorna o array de URLs
    return imagens.message
}

async function criarTela(urlImagem) {
    const container = document.getElementById('container')
    let img = document.createElement('img')
    img.src = urlImagem
    container.appendChild(img)
}

async function carregarTela() {
    const raca = document.getElementById('nome').value
    const imagens = await buscarImagens(raca) // 'await' é crucial aqui
    
    // Limpa o container antes de adicionar novas imagens
    const container = document.getElementById('container')
    container.innerHTML = ''
    
    if (imagens && Array.isArray(imagens)) {
        imagens.forEach(criarTela)
    } else {
        console.error("Nenhuma imagem encontrada ou raça inválida.")
    }
}

botaoPesquisar.addEventListener('click', carregarTela)
    
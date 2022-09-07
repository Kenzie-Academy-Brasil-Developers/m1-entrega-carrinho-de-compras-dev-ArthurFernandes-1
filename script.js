let body                    = document.querySelector("body")

let tagMain                 = document.createElement("main")

let divContainer            = document.createElement("div")

divContainer.classList.add("container")

let divCarrinho             = document.createElement("div")

divCarrinho.classList.add("carrinho")

let sectionTitulo           = document.createElement("section")

sectionTitulo.classList.add("titulo")

let textItem                = document.createElement("span")
let textValor               = document.createElement("span")

textItem.innerText          = "Item"
textValor.innerText         = "Valor"

let sectionTotal            = document.createElement("section")

sectionTotal.classList.add("total")

let textTotal               = document.createElement("span")

let valorTotal              = document.createElement("span")

textTotal.innerText         = "Total"
valorTotal.innerText        = sum(productsCart)

let button                  = document.createElement("button")

button.innerText            = "Finalizar compra"


sectionTitulo.append(textItem, textValor)
sectionTotal.append(textTotal, valorTotal)
divCarrinho.append(sectionTitulo,shoppingCart(productsCart),sectionTotal,button)
divContainer.appendChild(divCarrinho)
tagMain.appendChild(divContainer)
body.appendChild(tagMain)


function shoppingCart(listItem){
    
    let tagUl               = document.createElement("ul")

    for(let i = 0;i<listItem.length;i++){
        
        let tagLi           = document.createElement("li")
        let nome            = document.createElement("span")
        let valor           = document.createElement("span")

        let produtoNome     = listItem[i].name
        let produtoPrice    = listItem[i].price

        nome.innerText      = `${produtoNome}`
        valor.innerText     = `${produtoPrice}`
        
        tagLi.append(nome,valor)
        
        tagUl.appendChild(tagLi)
    }

    return tagUl
}

function sum(listItem){
    
    let maxValor = 0

    for(let i = 0; i < listItem.length;i++){
        maxValor += listItem[i].price
    }

    return maxValor
}

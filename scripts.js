const convertbutton = document.querySelector(".convert-button")
const currencySelectToCovert = document.querySelector(".origem")
const currencySelectCoverted = document.querySelector(".destino")

function convertValues() {
    const inputValor = document.querySelector(".input-valor").value
    const valorOrigem = document.querySelector(".valor-origem")
    const valorDestino = document.querySelector(".valor-destino")

    const dolartoday = 5.2
    const eurotoday = 6.2
    const libratoday = 6.8
    const bitcointoday = 324.000

    if(currencySelectCoverted.value == "dolar") {
            valorDestino.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValor/dolartoday)
    }

    if(currencySelectCoverted.value == "euro") {
            valorDestino.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValor/eurotoday)
    }

    if(currencySelectCoverted.value == "libra") {
            valorDestino.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValor/libratoday)
    }

    if(currencySelectCoverted.value == "bitcoin") {
            valorDestino.innerHTML = new Intl.NumberFormat("en-US", {
            style: "decimal",
            minimumFractionDigits: 8
        }).format(inputValor/bitcointoday)

    } 

    valorOrigem.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValor)
}

function changeCurrency(){
 const currencyName = document.getElementById("nome-moeda")
const currencyImage = document.querySelector(".currency-img")

 if(currencySelectCoverted.value == "dolar"){
    currencyName.innerHTML = "Dólar Americano"
    currencyImage.src = "./img/estados-unidos 1.png"
 }

  if(currencySelectCoverted.value == "euro"){
    currencyName.innerHTML = "Euro"
currencyImage.src = "./img/euro 3.png"
 }

 if(currencySelectCoverted.value == "libra"){
    currencyName.innerHTML = "Libra Esterlina"
    currencyImage.src = "./img/libra 1.png"
 }

 if(currencySelectCoverted.value == "bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./img/bitcoin 1.png"
 }

convertValues()

}

currencySelectCoverted.addEventListener("change", changeCurrency)
convertbutton.addEventListener("click", convertValues)
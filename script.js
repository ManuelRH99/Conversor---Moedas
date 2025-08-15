const convertButtton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select-1")
const currrencySelectTwo = document.querySelector(".currency-select-2")

async function convertValues() {

    const inputCurrencyValues = document.querySelector(".input-currency").value
    const valueToBeConverted = document.querySelector(".value-to-be-converted")
    const convertedValue2 = document.querySelector(".converted-value")

    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(reply => reply.json())  // arrow function 
     
    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high
    const libraToday = 7.48
    const realToady = 0.18

    if (currencySelect.value == "dolar") {

        convertedValue2.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValues / dolarToday)

    }

    if (currencySelect.value == "euro") {

        convertedValue2.innerHTML = new Intl.NumberFormat("de-De", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValues / euroToday)

    }

    if (currencySelect.value == "libra") {
        convertedValue2.innerHTML = new Intl.NumberFormat("en-RU", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValues / libraToday)

    }

    if (currencySelect.value == "Bitcoin") {
        convertedValue2.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValues / bitcoinToday)

    }

    if (currencySelect.value == "Real") {

        convertedValue2.innerHTML = new Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValues / realToady)

    }

    valueToBeConverted.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues)



    // divisao


    if (currrencySelectTwo.value == "dolar") {

        valueToBeConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValues)
    }

    if (currrencySelectTwo.value == "euro") {

        valueToBeConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValues)
    }

    if (currrencySelectTwo.value == "libra") {

        valueToBeConverted.innerHTML = new Intl.NumberFormat("en-RU", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValues)
    }

    if (currrencySelectTwo.value == "bitcoin") {

        valueToBeConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValues)
    }

    if (currrencySelectTwo.value == "real") {

        valueToBeConverted.innerHTML = new Intl.NumberFormat("en-us", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValues)
    }



}



function currencyChange() {

    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dolar americano"
        currencyImg.src = "./assets/Dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "EUR"
        currencyImg.src = "./assets/Euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "GBP"
        currencyImg.src = "./assets/libra.png"
    }

    if (currencySelect.value == "Bitcoin") {
        currencyName.innerHTML = "BTC"
        currencyImg.src = "./assets/bitcoin.png"
    }

    if (currencySelect.value == "Real") {
        currencyName.innerHTML = "BRL"
        currencyImg.src = "./assets/Brasil.png"
    }

    convertValues()

}


function currencyChangeTwo() {

    const currencyName2 = document.getElementById("currency-name-two")
    const currencyImg2 = document.querySelector(".currency-img-two")

    if (currrencySelectTwo.value == "Real") {
        currencyName2.innerHTML = "BRL"
        currencyImg2.src = "./assets/Brasil.png"
    }


    if (currrencySelectTwo.value == "dolar") {
        currencyName2.innerHTML = "$Dolar americano"
        currencyImg2.src = "./assets/Dolar.png"
    }

    if (currrencySelectTwo.value == "euro") {
        currencyName2.innerHTML = "EUR"
        currencyImg2.src = "./assets/Euro.png"
    }

    if (currrencySelectTwo.value == "libra") {
        currencyName2.innerHTML = "GBP"
        currencyImg2.src = "./assets/libra.png"
    }

    if (currrencySelectTwo.value == "Bitcoin") {
        currencyName2.innerHTML = "BTC"
        currencyImg2.src = "./assets/bitcoin.png"
    }
convertValues()

}

convertButtton.addEventListener("click", convertValues)

currencySelect.addEventListener("change", currencyChange)

currrencySelectTwo.addEventListener("change", currencyChangeTwo)







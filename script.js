const list = document.querySelector("ul")
const buttonShowAll = document.querySelector(".show-all")
const buttonMapAll = document.querySelector(".map-all")
const sumAll = document.querySelector(".sum-all")
const filterOnlyVegan = document.querySelector(".vegan-all")

function formatedCurrency(value) {
    const newCurrency = value.toLocaleString('pt-br', { style: 'currency', 
    currency: 'BRL',
 })

 return newCurrency

}

//FOR EACH - TODOS OS PRODUTOS//
function showAll(productsArray) {
    let myLi = " "

    productsArray.forEach((product) => {
        myLi += `   
        <li>
            <img src=${product.src}>
            <p>${product.name}</p>
            <p class="menu-price"> ${formatedCurrency(product.price)}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}

//MAP - 10% DE DESCONTO//
function mapAllItems() {
    const discountPrice = menuOptions.map((product) => ({
        ...product, //Spread operator - todos os itens do array//
        price: product.price * 0.9, //10% de desconto//
    }))
    showAll(discountPrice)
}

//REDUCE - VALOR TOTAL DE TODOS OS PRODUTOS//
function sumAllItems() {
    const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

    list.innerHTML = `   
   <li>
       <p>O valor total dos produtos é ${formatedCurrency(totalValue)}</p>
   </li>
   `
}

//FILTER - VEGANOS ONLY//
function veganAll() {
    const filterOnlyVegan = menuOptions.filter((product) => product.vegan)

    showAll(filterOnlyVegan)

}


buttonShowAll.addEventListener("click", () => showAll(menuOptions))
buttonMapAll.addEventListener("click", mapAllItems)
sumAll.addEventListener("click", sumAllItems)
filterOnlyVegan.addEventListener("click", veganAll)



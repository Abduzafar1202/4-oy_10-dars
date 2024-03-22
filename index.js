let body = document.body;
let header = document.createElement("header");
header.classList.add("header")
console.log(header);

body.appendChild(header)
let arr = [
    {
        id: 1,
        image: "./img/logo.png",
        image2: "./img/Bg_circles.png",
        text:"SUPERBANK",
        number: "1234 5678 1234 5678",
        text2:"VALID THRU",
        text3:"12/27",
        text4:"JOHN GRIFFIN",
        text5:"debit",
    }
]

arr.map((item) =>{
    return header.innerHTML += `
    <img class="img" src=${item.image2} alt=${""} class=${"img"} />
    
    <div class="card">
    <h1 class="card_text">${item.text}</h1>
    <h2 class="card_number">${item.number}</h2>
    <p>${item.text2}</p>
    <h2 class="card_text3">${item.text3}</h2>
    <h2 class="card_text4">${item.text4}</h2>
    <h2 class="card_text5">${item.text5}</h2>
    <img src=${item.image} alt=${""}/>
    </div>
    `
})

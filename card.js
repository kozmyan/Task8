
myCard = {
  poster: "poster.png",
  type: "bluray.png",
  sale: "sale.png",
  title1: "Тайная жизнь",
  title2: "домашних животных 2",
  price: 55,
  sale_percent: 10,
  currency: "руб.",
  rating: 0.5,
  button: "button.png",
  promotion: ""
};


function create() {
    myCard.title1 = form1.title1_1.value;
    myCard.title2 = form1.title1_2.value;
    myCard.promotion = form1.promotion1.value;
    myCard.price = form1.price1.value;
    myCard.sale_percent = form1.sale_percent1.value;
    myCard.rating = form1.rating1.value;
    updateCard();  
}


function updateCard() {

let fullPrice = `${myCard.price},00 ${myCard.currency}`;

let salePrice = `${Math.round(myCard.price *(1- myCard.sale_percent / 100))},00 ${myCard.currency}`;


// Рейтинг товара
function rating(){
let rank = "";
let maxRank = 5;
for(i=1; i<=myCard.rating; i++) 
     rank += "star ";
 
if (myCard.rating % Math.floor(myCard.rating) == 0)
     rank += ""; 
else 
     rank += "star_half ";

for(i=1; i<=(maxRank-myCard.rating); i++)
     rank += "star_border ";

     return rank;
}



// Проверка на наличие товара на акции

if (myCard.promotion == "товар на акции") 
    myCard.sale = "sale.png";
else {
    myCard.sale = "";
    salePrice = fullPrice;
    fullPrice = "";
}


let s = `
<div class="card">
    <div class="poster">
        <img src="images/${myCard.poster}" alt="">
        <img src="images/${myCard.sale}" alt="">
        <img src="images/${myCard.type}" alt="">
    </div>

    <div class="title">
        <div>${myCard.title1}</div>
        <div>${myCard.title2}</div>
    </div>

    <div class="price">
        <div>${salePrice}</div>
        <div>${fullPrice}</div>
    </div>

    <div class="ranting">
        <div>
            <span class="material-icons">
            ${rating()}
            </span>

        </div>
    </div>
    <div class="button">
        <div>
            <img src="images/${myCard.button}" alt="">
        </div>
    </div>
</div>
`;

cards.innerHTML = s;
}


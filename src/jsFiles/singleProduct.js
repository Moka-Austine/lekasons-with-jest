const cardIMG = document.getElementsByClassName("cardIMG");
console.log(cardIMG)
const bigImage = document.getElementById("mainImg");
const smallImage = document.getElementsByClassName("small-img");

/*function index() {
    cardIMG.forEach(element => {
    bigImage.src = smallImage[element].src;    
});
cardIMG.addEventListener("click", () => {
        cardIMG.forEach(element => {
            console.log(element.src)
        //bigImage.src = cardIMG[element].src;    
    });
}
    
); */

cardIMG.onclick(() => {
    if(img.cardIMG == cardIMG[0]) {
        bigImage.src = cardIMG[0].src;
    }
});


function singleProducts() {

    smallImage[0].addEventListener("click", () => {
        bigImage.src = smallImage[0].src;
    });
    smallImage[1].addEventListener("click", () => {
        bigImage.src = smallImage[1].src;
    });
    smallImage[2].addEventListener("click", () => {
        bigImage.src = smallImage[2].src;
    });
    smallImage[3].addEventListener("click", () => {
        bigImage.src = smallImage[3].src;
    });
}; 
singleProducts();

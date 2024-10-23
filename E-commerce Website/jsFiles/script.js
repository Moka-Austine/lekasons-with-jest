const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("nav-bar");

const price = document.getElementById("price");
//const priceInt = price.innerHTML;
const itemQuantity = document.getElementById("itemQuantity").addEventListener(
   "click", () => {
    const totalPrice = itemQuantity.value * price;
    price.innerHTML = `$${totalPrice}`;
   }
);




if (bar) {
     bar.addEventListener("click", () => {
         nav.classList.add("Active");
    })
}
if (close) {
     close.addEventListener("click", () => {
         nav.classList.remove("Active");
    })
}


function PasswordVisibility() {
    const option = document.getElementById("option");

    if (option.type === "password") {
        option.type = "text";
    } else {
        option.type = "password";
    };
};

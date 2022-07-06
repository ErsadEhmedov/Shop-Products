//cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

//open Cart
cartIcon.onclick = () => {
    cart.classList.add("active")
}

//Close catr
closeCart.onclick = () => {
    cart.classList.remove("active")
}

//cart Working hs 
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded' , ready);
}else{
    ready();
}

//Making Function 
function ready(){
    //Reomve Items form cart
    var reomveCartButtons = document.getElementsByClassName('cart-remove')
    console.log(reomveCartButtons)
    for(var i = 0 ; i < reomveCartButtons.length; i++){
        var button = reomveCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
    //Quantity Changes
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for (var i = 0 ; i < quantityInputs.length; i++){
        var input = quantityInputs[i]
        input.addEventListener('change' , quantityChanged);
    }
    //Add To Cart 
    var addcart = document.getElementsByClassName('add-cart')
    for (var i = 0; i < addcart.length; i++){
        var button = addCart [i]
        button.addEventListener('click', addCartClicked)
    }
}

//Reomve Items from cart
function removeCartItem(event ){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove();
    updatetotal();
}

//Quantity Changes
function quantityChanged(event){
    var imput = evet.target
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();
}

//Add to cart 
function addCartClicked(event){
    var button = event.target
    var shopProducts = button.parentElement
    var title = shopProducts.getElementsByClassName('product-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('product-img')[0].src;
    addProductToCart(title ,price , productImg);
    updatetotal();
}

function addProductToCart(title,price,product) {
    var cartShopBox = document.createElement("div");
    //cartShopBox.classList.add('cart-box)
    var cartItems = document.grtElementsByClassName("cart-content")[0]
    var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
    for (var i = 0; i < cartItemsNames.length; i++){
        alert("You have already add this item to cart");
    }    
}





//Update Total
function updatetotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var carBoxes = cartContent.getElementsByClassName('cart-box');
    var total = 0;
    for(var i = 0; i < cartBoxes.length; i++){
        var cartBox = cartBoxes [i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElemet = cartBox.getElementsByClassName('cart-quantity')[0];
        var price = parseFloat(priceElement.innerText.replace("$", ""))
        var quantity = quantityElemet.value;
        total = total + (price * quantity);

        //If price Contain some  Cants Value
        total = Math.round(total * 100) / 100;

        document.getElementsByClassName('total-price')[0].innerText = "$" + total;
    }
}
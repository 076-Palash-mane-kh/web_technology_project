/*function AddtoCart() {
    let modalinput = document.querySelector("#cart-product");

    let olditem = modalinput.innerHTML;

    let cartitem = document.querySelector("#card1").innerHTML;

    let newproduct = `${cartitem}`;

    modalinput.innerHTML = cartitem + olditem;

}*/

function AddtoCart(param1) {
    let modalinput = document.querySelector("#cart-product");

    let olditem = modalinput.innerHTML;


    let cartitem = param1.parentElement.parentElement.innerHTML;

    modalinput.innerHTML = cartitem + olditem;



    modalinput.innerHTML = ` <div class="col-3"> ${cartitem}</div> <div class="col-3"> ${olditem}</div>`;

}
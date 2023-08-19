if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready();
}
function ready() {
    let RemoveBtns = document.getElementsByClassName('MiniCartItemremoveBtns')
    for (let i = 0; i < RemoveBtns.length; i++) {
        const RmvBtn = RemoveBtns[i];
        RmvBtn.addEventListener("click", RemoveCartItems)
        UpdateSubtotal()
    }
    // Add to Cart
    let AddCartBtns = document.getElementsByClassName('AddToCartBtns')
    for (let k = 0; k < AddCartBtns.length; k++) {
        const AddCartButton = AddCartBtns[k];
        AddCartButton.addEventListener("click", AddCrtClicked)
        UpdateSubtotal()
    }



}
function RemoveCartItems(event) {
    var buttonclicked = event.target;
    buttonclicked.parentElement.parentElement.remove()
    UpdateSubtotal()

}
function AddCrtClicked(event) {
    let button = event.target
    let shopProduct = button.parentElement.parentElement
    let productTitle = shopProduct.getElementsByClassName('productTitleIndPage')[0].innerText;
    let productPrice = shopProduct.getElementsByClassName('productPriceIndP')[0].innerText;
    let productImgs = document.getElementsByClassName('productImg')[0].src;
    addProductToAdd(productTitle, productPrice, productImgs);
    UpdateSubtotal();

}
function addProductToAdd(productTitle, productPrice, productImgs) {
    let NewProductDiv = document.createElement('div')
    NewProductDiv.classList.add('MinicartContent')
    let cartContant = document.getElementsByClassName('MiniCartItemDiv')[0]
    let cartTitles = cartContant.getElementsByClassName('productTitle')
    for (let i = 0; i < cartTitles.length; i++) {
        alert('Product is already added to Cart.')
        return;
    }
    let MinicartContentbox = `<div class="MinicartProductImage">
                                <img class="ProductImage" src="${productImgs}" alt="">
                            </div>
                            <div class="MinicartProductDetails">
                                <a href="#">
                                    <h3 class="productTitle">${productTitle}</h3>
                                </a>
                                <a href="../Brand page links/Puma.html">
                                    <h4 class="ProductBrand">By PUMA</h4>
                                </a>
                                <h5 class="productPrice">${productPrice}</h5>
                            </div>
                            <div class="MiniCartProductRemoverBtndiv">
                                <i class="fa-solid fa-x fa-sm MiniCartItemremoveBtns" style="color: #000000;"></i>
                            </div>
    `;
    // console.log(cartContant)
    NewProductDiv.innerHTML = MinicartContentbox;
    cartContant.append(NewProductDiv);
    NewProductDiv.getElementsByClassName('MiniCartItemremoveBtns')[0].addEventListener("click", RemoveCartItems);
}


function UpdateSubtotal() {
    var cartContant = document.getElementsByClassName('MiniCartItemDiv')[0]
    var cartBoxes = cartContant.getElementsByClassName("MinicartContent")
    var total = 0;
    for (let i = 0; i < cartBoxes.length; i++) {
        const cartBox = cartBoxes[i];
        let priceElement = cartBox.getElementsByClassName('productPrice')[0]
        let price = parseFloat(priceElement.innerText.replace("$", ""));
        total = price + total; 
    }
        total = Math.round(total);
        document.getElementsByClassName('SubtotalMiniCart')[0].innerText = "$" + total;
}
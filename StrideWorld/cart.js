
if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready)
} else {
    ready();
}
function ready() {
    var table = document.getElementById('divToRemove');

    var rows = table.getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var td = row.getElementsByTagName('td');
        const RemoveBtn = td[4];
        RemoveBtn.addEventListener('click', removeCart)

        var updateQuantityInputs = document.getElementsByClassName('productquantityincart')
        for (let i = 0; i < updateQuantityInputs.length; i++) {
            const input = updateQuantityInputs[i];
            input.addEventListener('change', quantityChanged)
        }



        function removeCart(event) {
            var btnClicked = event.target;
            btnClicked.parentElement.parentElement.remove()
            updateTotal();
        }


    }

}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 0;
    }
    updateTotal();
}

var addtocartBtns = document.getElementsByClassName('AddToCartBtns')
for (i = 0; i < addtocartBtns.length; i++) {
    var updatedaayush = addtocartBtns[i]
    updatedaayush.addEventListener("click", addCartClicked);
}

function addCartClicked(event) {
    var button = event.target;
    var shopProduct = button.parentElement
    var title = document.getElementsByClassName('productTitleIndPage')[0].innerText
    var price = document.getElementsByClassName('productPriceIndP')[0].innerText
    var productimg = document.getElementsByClassName('productImg')[0].src
    addProducttocartfnc(title, price, productimg);
}

function addProducttocartfnc(title, price, productimg) {
    var createrowInCart = document.createElement('tr')
    createrowInCart.classList.add('cartProductDivRow')
    var cartitemsTbody = document.getElementsByClassName('ContentBox')[0]
    var cartitems = cartitemsTbody.getElementsByClassName("cartProductTitle")
    for (let i = 0; i < cartitems.length; i++) {
        alert("Clicked")
    }
}



var deployDiv = `<td><a href="#"><img src="../Assets/Adidas Product/01.jpg" alt=""></a>
                     </td>
                     <td>
                         <span class="cartProductTitle"><strong>TRC Blaze Knit Unisex Sneakers</strong></span>
                         <a href=""> <p>By NIKE</p></a>
                     </td>
                     <td class="PriceInCart">999$</td>
                     td><input type="number" value="1" class="productquantityincart">
                     </td>
                     <td><i class="fa-solid fa-x fa-sm" id="removeMainCartItem" style="color: #000000;"></i> 
                     </td>
                    `;

// createrowInCart.innerHTML = deployDiv;
// cartitemsTbody.append(createrowInCart)
// createrowInCart.getElementsByClassName('removeMainCartItem').addEventListener("click", removeCart)
// createrowInCart.getElementsByClassName('productquantityincart').addEventListener('change', quantityChanged)







// CHANGING HTML

function updateTotal() {
    var cartcontentContainer = document.getElementsByClassName('ContentBox')[0]
    var CartBoxs = cartcontentContainer.getElementsByClassName('cartProductDivRow')
    var total = 0;
    for (let b = 0; b < CartBoxs.length; b++) {
        const cartBox = CartBoxs[b];
        let priceElement = cartBox.getElementsByClassName('PriceInCart')[0]
        var price = parseFloat(priceElement.innerText.replace("$", ""));
        let QuantityElement = cartBox.getElementsByClassName('productquantityincart')[0]
        let quantity = QuantityElement.value
        total = total + (price * quantity);

        document.getElementsByClassName('TotalIncart')[0].innerText = '$' + total
    }
}


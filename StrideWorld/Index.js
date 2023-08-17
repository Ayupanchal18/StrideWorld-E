// Arrival and Bestseller section Toggle after clicking

let NewArrival = document.getElementById("NewArrivalBtn");
let BestSeller = document.getElementById("BestsellerBtn");


NewArrival.addEventListener("click", () => {
    let BestSellerDiv = document.getElementById("def");
    let NewArrivalDiv = document.getElementById("abc");
    if (NewArrivalDiv.style.display = "none") {
        NewArrivalDiv.style.display = "block"
    } else {
        NewArrivalDiv.style.display = "none"
    }
    if (BestSellerDiv.style.display = "block") {
        BestSellerDiv.style.display = "none"
    } else {
        BestSellerDiv.style.display = "none"
    }
    if (NewArrival.style.textDecoration = "none") {
        NewArrival.style.textDecoration = "underline #00b8a9"
    } else {
        NewArrival.style.textDecoration = "underline #00b8a9"
    }
    if (BestSeller.style.textDecoration = "underline #00b8a9") {
        BestSeller.style.textDecoration = "none"
    } else {
        BestSeller.style.textDecoration = "none"
    }

})

BestSeller.addEventListener("click", () => {
    let BestSellerDiv = document.getElementById("def");
    let NewArrivalDiv = document.getElementById("abc");
    if (BestSellerDiv.style.display = "none") {
        BestSellerDiv.style.display = "block"
    } else {
        BestSellerDiv.style.display = "block"
    }
    if (NewArrivalDiv.style.display = "block") {
        NewArrivalDiv.style.display = "none"
    } else {
        NewArrivalDiv.style.display = "none"
    }
    if (BestSeller.style.textDecoration = "none") {
        BestSeller.style.textDecoration = "underline #00b8a9"
    } else {
        BestSeller.style.textDecoration = "underline #00b8a9"
    }
    if (NewArrival.style.textDecoration = "underline #00b8a9") {
        NewArrival.style.textDecoration = "none"
    } else {
        NewArrival.style.textDecoration = "none"
    }
})


// Navigation bar toggle for mobile devices

const bar = document.getElementById("MobilenavBarToggle");
const close = document.getElementById("MobilenavBarOff");
const nav = document.getElementById("ListItem");

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active")
    });
}
if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    });
}

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

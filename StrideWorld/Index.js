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

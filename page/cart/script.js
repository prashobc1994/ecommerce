
// popup-nav
document.querySelector('.close-banner').addEventListener('click', () => {
    document.querySelector('.top-banner').style.display = 'none';
});

// adding quantity
function increaseQty(button) {
    const quantityElement = button.previousElementSibling;
    let quantity = parseInt(quantityElement.textContent.replace("Qty: ", ""));
    quantityElement.textContent = "Qty: " + String(quantity + 1).padStart(2, '0');
}

function decreaseQty(button) {
    const quantityElement = button.nextElementSibling;
    let quantity = parseInt(quantityElement.textContent.replace("Qty: ", ""));
    if (quantity > 1) {
        quantityElement.textContent = "Qty: " + String(quantity - 1).padStart(2, '0');
    }
}



function togglePopup() {
    const popup = document.getElementById("Popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function closePopup() {
    const popup = document.getElementById("offerPopup");
    popup.style.display = "none";
}
function toggleOffersPopup() {
    const popup = document.getElementById("offersPopup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}






function togglePopupTwo() {
    const popup = document.getElementById("PopupTwo");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function closePopuptwo() {
    const popup = document.getElementById("offerPopuptwo");
    popup.style.display = "none";
}
function toggleOffersPopuptwo() {
    const popup = document.getElementById("offersPopuptwo");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}





function togglePopupThree() {
    const popup = document.getElementById("PopupThree");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}



function openPopup() {
    document.getElementById("offersModal").style.display = "block";
}

function closePopup() {
    document.getElementById("offersModal").style.display = "none";
}

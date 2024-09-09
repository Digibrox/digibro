
document.addEventListener("DOMContentLoaded", function() {
    const customerButton = document.getElementById("customerButton");
    const resetCustomerButton = document.getElementById("resetCustomerButton");



    const options = document.querySelector(".user-search__list");
    options.addEventListener("click", function(event) {
        const target = event.target;
        if (target.classList.contains("user-search__option")) {
            customerButton.classList.remove("disabled");
            resetCustomerButton.classList.remove("disabled");
        }
    });
});

document.getElementById("agesa").addEventListener("click", openClientCard);
function openClientCard(){
    document.getElementById("client__card").style.display = "flex";
}
$(document).ready(function () {
    $("#companySearch").on("input", function () {
        const searchTerm = $(this).val().toLowerCase();
        $("#companyList li").each(function () {
            const companyName = $(this).data("name").toLowerCase();
            if (companyName.includes(searchTerm)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
});

document.getElementById("buttonEdit").addEventListener("click", function() {
    document.getElementById("spanEdit").click();
});
document.getElementById("buttonDelete").addEventListener("click", function() {
    document.getElementById("spanDelete").click();
});
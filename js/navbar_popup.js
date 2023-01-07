$(function () {
    $(".toggle").on("click", function () {
        if ($(".menu").hasClass("active")) {
            $(".menu").removeClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        }
        else {
            $(".menu").addClass("active");
            $(this).find("a").html("<ion-icon name='menu-outline'></ion-icon>");
        }
    });
});

function openLogin() {
    document.getElementById("myLogin").style.display = "block";
}

function closeLogin() {
    document.getElementById("myLogin").style.display = "none";
}

function openRegister() {
    document.getElementById("myRegister").style.display = "block";
}

function closeRegister() {
    document.getElementById("myRegister").style.display = "none";
}

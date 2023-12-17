$(document).ready(function () {
    $("#theme-toggle").click(function () {
        $("body").toggleClass("dark-mode");
        $("#toggle-text").text($("body").hasClass("dark-mode") ? "Light Mode" : "Dark Mode");
    });
});

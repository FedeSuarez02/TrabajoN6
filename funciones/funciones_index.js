

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("legend").forEach(function (legend) {
        legend.innerHTML = legend.textContent.replace(/\b(\w{4,})/g, function(match) {
            return "<span class='letra_grande'>" + match.charAt(0) + "</span>" + match.slice(1);
        });
    });
});

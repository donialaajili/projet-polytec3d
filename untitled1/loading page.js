document.addEventListener("DOMContentLoaded", function() {
  // Marquer le corps comme chargé
  document.body.classList.add("loaded");

  // Faire disparaître l'animation après un délai (vous pouvez ajuster le délai selon vos besoins)
  setTimeout(function() {
    document.getElementById("loading-animation").style.display = "none";
  }, 500);
});



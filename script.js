document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".animate-fade").classList.add("active");
  });

  function showDetails(title, description, icon) {
    document.getElementById("modalTitle").querySelector("span").innerText = title;
    document.getElementById("modalBody").innerText = description;
    document.getElementById("modalIcon").src = icon; // Set the icon dynamically

    var myModal = new bootstrap.Modal(document.getElementById("detailsModal"));
    myModal.show();
}

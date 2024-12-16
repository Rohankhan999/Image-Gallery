function myFunction(imgs) {

    var expandImg = document.getElementById("expandedImg");
    var imageModal = document.getElementById("imageModal");
    expandImg.src = imgs.src;
    imageModal.style.display = "flex";
}

function closeModal() {
    var imageModal = document.getElementById("imageModal");
    imageModal.style.display = "none";
}

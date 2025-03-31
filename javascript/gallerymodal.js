document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const modalDesc = document.getElementById("imageDescription");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".galleryItem").forEach(img => {
        img.addEventListener("click", function () {
            modal.style.display = "flex"; // Show modal
            setTimeout(() => modal.classList.add("show"), 10); // Smooth fade-in
            modalImg.src = this.getAttribute("src"); // Use clicked image src

            let description = this.getAttribute("alt") || "No description available";
            let words = description.split(" ");
            let totalWords = words.length;
            let wordsPerLine = Math.ceil(totalWords / 3); // Divide into 3 lines

            let formattedText = "";
            for (let i = 0; i < totalWords; i++) {
                formattedText += words[i] + " ";
                if ((i + 1) % wordsPerLine === 0 && i !== totalWords - 1) {
                    formattedText += "<br>"; // Add line break at the end of each line
                }
            }
            modalDesc.innerHTML = formattedText;
        });
    });


     

    closeBtn.addEventListener("click", function () {
        modal.classList.remove("show");
        setTimeout(() => modal.style.display = "none", 300);
    });

    modal.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("show");
            setTimeout(() => modal.style.display = "none", 300);
        }
    });
});

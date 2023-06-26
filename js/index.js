let span = document.querySelector(".up");

window.onscroll = function () {

    this.scrollY >= 1000 ? span.classList.add("show") : span.classList.remove("show");
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};


// serach function all courses page============================================

// serach function all courses page============================================
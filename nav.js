const changeBg = () => {
    if (window.scrollY >= 100) {
        let a = document.getElementById("desNav");
        a.setAttribute("class", "scrollNav");
    } else {
        let a = document.getElementById("desNav");
        a.setAttribute("class", "");
    }
};

window.addEventListener("scroll", changeBg);
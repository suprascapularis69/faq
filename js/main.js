let headers = document.querySelectorAll("[data-name='spoiler-title']");
let arrows = document.querySelectorAll('.arrow-down');
let headText = document.querySelectorAll('.header-text');


headers.forEach(function(item) {
    item.addEventListener("click", headerClick);
});

function headerClick() {
    this.nextElementSibling.classList.toggle("spoiler-body");
}

for (let i = 0; i < arrows.length; i++) {
    headers[i].addEventListener('click', function(e) {
        e.preventDefault();
        arrows[i].classList.toggle('arrow-rotate');
    })
}

for (let i = 0; i < headText.length; i++) {
    headers[i].addEventListener('click', function(e) {
        e.preventDefault();
        headText[i].classList.toggle('click-text');
    })
}
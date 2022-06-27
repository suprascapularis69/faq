let listHeaders = document.querySelectorAll('.list-header');

listHeaders.forEach((elem) => {
  elem.addEventListener('click', function() {
    let parentElem = this.parentNode;
    let listContent = parentElem.querySelector('.list-content');
    let arrowDown = parentElem.querySelector('.arrow-down');
    let headerText = parentElem.querySelector('.header-text');
    if(listContent.classList.contains('.active') | arrowDown.classList.contains('active') | headerText.classList.contains('active')){
    listContent.classList.remove('active');
    arrowDown.classList.remove('active');
    headerText.classList.remove('active');
    } else {      
      if (document.querySelector('.active')) {
        for (let x of document.querySelectorAll('.active')) {
          x.classList.remove('active');
        }
      }
    listContent.classList.add('active');
    arrowDown.classList.add('active');
    headerText.classList.add('active');
    }
  })
})
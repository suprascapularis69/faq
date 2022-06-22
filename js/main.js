let sections = document.querySelectorAll("details");
sections.forEach((section) => section.addEventListener('toggle', toggleAcordeon));

function toggleAcordeon() {
  this.open && sections.forEach((section) => {
    if (section !== this && section.open) {
      section.open = false;
    }
  });
}
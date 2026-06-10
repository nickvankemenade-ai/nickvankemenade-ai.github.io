const cards = document.querySelectorAll(".card");
let index = 0;
let userOverride = false;

function setActive(i) {
  cards.forEach(c => c.classList.remove("active"));
  cards[i].classList.add("active");
}

function next() {
  if (!userOverride) {
    index = (index + 1) % cards.length;
    setActive(index);
  }
}

cards.forEach((card, i) => {
  card.addEventListener("click", () => {
    userOverride = true;
    index = i;
    setActive(i);
  });
});

setInterval(next, 4000);
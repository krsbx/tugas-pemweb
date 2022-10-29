const vivobookCard = document.querySelector('[data-card-vivobook]');
const swiftCard = document.querySelector('[data-card-swift]');

const vivobook = document.querySelector('[data-vivobook]');
const swift = document.querySelector('[data-swift]');

let indicator = 0;

const swiftList = ['Swift', 'Swift 3x'];
const vivobookList = ['Vivobook 14', 'Vivobook 14x'];

// Modified HTML Text
setInterval(() => {
  if (indicator > 1) {
    indicator = 0;
  }

  vivobook.textContent = `Asus ${vivobookList[indicator]}`;
  swift.textContent = `Acer ${swiftList[indicator]}`;

  indicator++;
}, 500);

// Dynamic Event
vivobookCard.addEventListener('click', () => {
  const link = vivobookCard.querySelector('a');

  window.location.href = link.href;
});

swiftCard.addEventListener('click', () => {
  const link = swiftCard.querySelector('a');

  window.location.href = link.href;
});

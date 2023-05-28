// Отримуємо посилання на елементи DOM
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.getElementById('value');

// Ініціалізуємо лічильник
let counterValue = 0;

// Функція для оновлення значення лічильника на сторінці
function updateCounter() {
  valueSpan.textContent = counterValue;
}

// Додаємо слухача подій на кнопку декременту
decrementButton.addEventListener('click', function() {
  counterValue--;
  updateCounter();
});

// Додаємо слухача подій на кнопку інкременту
incrementButton.addEventListener('click', function() {
  counterValue++;
  updateCounter();
});

// Ініціалізуємо початкове значення лічильника
updateCounter();

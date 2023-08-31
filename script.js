'use strict';

document.addEventListener("click", (event) => {
  const roundButton = event.target.closest(".Section__button");
  if (!roundButton) return; // Если клик не был на кнопке, не обрабатываем

  roundButton.classList.toggle("expanded");
  const buttonContent = roundButton.querySelector(".Button-status");
  const additionalContent = roundButton.querySelector(".Button-content");

  if (roundButton.classList.contains("expanded")) {
      buttonContent.textContent = "-";
      additionalContent.style.display = "inline";
  } else {
      buttonContent.textContent = "+";
      additionalContent.style.display = "none";
  }
});
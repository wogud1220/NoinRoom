document.addEventListener("DOMContentLoaded", () => {
  let baseFontSize = 16;

  const magnifyingGlass = document.querySelector(".magnifying");

  function updateFontSize(scale) {
    baseFontSize += scale;

    if (baseFontSize < 12) baseFontSize = 12;
    if (baseFontSize > 32) baseFontSize = 32;

    document.body.style.fontSize = `${baseFontSize}px`;

    document.querySelectorAll(".content, .content *").forEach((element) => {
      element.style.fontSize = `${baseFontSize}px`;
    });
  }

  magnifyingGlass.addEventListener("click", () => {
    updateFontSize(2);
  });
});
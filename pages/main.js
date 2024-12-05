document.addEventListener("DOMContentLoaded", () => {

  let baseFontSize = 16;

  const zoomInButton = document.querySelector(".zoomin");
  const zoomOutButton = document.querySelector(".zoomout");

  function updateFontSize(scale) {
    baseFontSize += scale;

    if (baseFontSize < 12) baseFontSize = 12;
    if (baseFontSize > 32) baseFontSize = 32;

    document.body.style.fontSize = `${baseFontSize}px`;

    document.querySelectorAll(".box").forEach((box) => {
      box.style.fontSize = `${baseFontSize}px`;
      box.querySelectorAll("*").forEach((child) => {
        child.style.fontSize = `${baseFontSize}px`;
      });
    });
  }

  zoomInButton.addEventListener("click", () => {
    updateFontSize(2);
  });

  zoomOutButton.addEventListener("click", () => {
    updateFontSize(-2);
  });
});

function playSiren() {
  const sirenAudio = document.getElementById("siren-sound");
  sirenAudio.play();
}

// 슬라이드 토글 함수
function toggleReception() {
  const receptionForm = document.getElementById("reception-form");
  receptionForm.classList.toggle("hidden");
  receptionForm.style.display =
    receptionForm.style.display === "block" ? "none" : "block";
}

function openModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.style.display = "none";
}

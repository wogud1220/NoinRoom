document.addEventListener("DOMContentLoaded", () => {
  let baseFontSize = 16; // 기본 글씨 크기

  const magnifyingGlass = document.querySelector(".magnifying");

  // 글씨 크기 업데이트 함수
  function updateFontSize(scale) {
    baseFontSize += scale;

    // 글씨 크기 제한 (최소 12px, 최대 32px)
    if (baseFontSize < 12) baseFontSize = 12;
    if (baseFontSize > 32) baseFontSize = 32;

    // body의 전체 글씨 크기 변경
    document.body.style.fontSize = `${baseFontSize}px`;

    // .content 영역 안의 모든 텍스트 크기 변경
    document.querySelectorAll(".content, .content *").forEach((element) => {
      element.style.fontSize = `${baseFontSize}px`;
    });
  }

  // 돋보기를 클릭하면 글씨 크기 증가
  magnifyingGlass.addEventListener("click", () => {
    updateFontSize(2); // 글씨 크기를 2px 증가
  });
});

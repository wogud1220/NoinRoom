let isKeypadVisible = false;

function toggleKeypad() {
  const keypad = document.getElementById("keypad");
  isKeypadVisible = !isKeypadVisible;
  keypad.classList.toggle("hidden", !isKeypadVisible);
}

function addToInput(value) {
  const ageInput = document.getElementById("age");
  ageInput.value = ageInput.value + value;
}

function clearInput() {
  const ageInput = document.getElementById("age");
  ageInput.value = "";
}

function removeLast() {
  const ageInput = document.getElementById("age");
  ageInput.value = ageInput.value.slice(0, -1);
}

function checkBenefits() {
  const age = parseInt(document.getElementById("age").value, 10);
  const benefitsList = document.getElementById("benefits-list");
  const resultsContainer = document.getElementById("benefits-results");
  benefitsList.innerHTML = "";

  if (isNaN(age) || age <= 0) {
    alert("올바른 나이를 입력하세요.");
    return;
  }

  const benefits = [];

  // 일반 검진
  if (age >= 20) {
    benefits.push("2년마다 무료 건강 검진(무료)");
  }

  // 성별 및 연령별 추가 검진
  if (age >= 24) {
    benefits.push("이상지질혈증 검사 (남성: 만 24세 이상 4년마다)");
  }
  if (age >= 40) {
    benefits.push("이상지질혈증 검사 (여성: 만 40세 이상 4년마다)");
    benefits.push("B형 간염 검사 (만 40세에 1회, 보균자 및 면역자 제외)");
    benefits.push("치면세균막 검사 (만 40세에 포함)");
    benefits.push("생활습관 평가 (만 40세, 50세, 60세, 70세)");
  }
  if (age >= 50) {
    benefits.push("대장암 검진(무료)");
  }
  if (age >= 54 && (age === 54 || age === 66)) {
    benefits.push("골다공증 검사 (여성: 만 54세, 66세)");
  }
  if (age >= 60) {
    benefits.push("인지기능장애 검사 (만 66세 이상 2년마다)");
    benefits.push("노인신체기능 검사 (만 66세, 70세, 80세)");
  }

  // 암 검진
  if (age >= 40) {
    benefits.push("위암 검진 (만 40세 이상, 2년마다, 10% 부담)");
    benefits.push("간암 검진 (만 40세 이상 고위험군, 6개월마다, 10% 부담)");
    benefits.push("유방암 검진 (여성: 만 40세 이상, 2년마다, 10% 부담)");
  }
  if (age >= 50) {
    benefits.push("대장암 검진 (만 50세 이상, 매년 분변잠혈검사, 무료)");
  }
  if (age >= 54 && age <= 74) {
    benefits.push("폐암 검진 (만 54세~74세, 고위험군, 2년마다, 10% 부담)");
  }
  if (age >= 20 && [20, 30, 40, 50, 60, 70].includes(age)) {
    benefits.push("우울증 검사 (만 20세, 30세, 40세, 50세, 60세, 70세)");
  }
  if (age >= 20) {
    benefits.push("자궁경부암 검진 (여성: 만 20세 이상, 2년마다, 무료)");
  }

  if (benefits.length === 0) {
    benefits.push("현재 무료 검진 혜택이 없습니다.");
  }

  // 결과 리스트 출력
  benefits.forEach((benefit) => {
    const listItem = document.createElement("li");
    listItem.textContent = benefit;
    benefitsList.appendChild(listItem);
  });

  resultsContainer.classList.remove("hidden");
}


// 초기 폰트 크기 설정
let fontSize = 16; // 기본 폰트 크기(px)

// 글씨 크기 증가 함수
function increaseFontSize() {
  fontSize += 2; // 폰트 크기 2px씩 증가
  updateFontSize();
}

// 글씨 크기 감소 함수
function decreaseFontSize() {
  fontSize = Math.max(12, fontSize - 2); // 폰트 크기 12px 이하로 감소하지 않도록 제한
  updateFontSize();
}

// 폰트 크기 업데이트 함수
// 폰트 크기 업데이트 함수 수정
function updateFontSize() {
  const mainElement = document.querySelector("main"); // main 태그 선택
  const contentElement = document.querySelector(".content"); // content 선택

  if (mainElement) {
    mainElement.style.fontSize = fontSize + "px"; // main의 글씨 크기 조정
  }

  if (contentElement) {
    contentElement.style.width = "600px"; // content 크기 고정
  }
}

// + 버튼 클릭 이벤트 연결
const zoomInButton = document.querySelector(".zoomin"); // + 버튼 클래스
if (zoomInButton) {
  zoomInButton.addEventListener("click", increaseFontSize);
}

// - 버튼 클릭 이벤트 연결
const zoomOutButton = document.querySelector(".zoomout"); // - 버튼 클래스
if (zoomOutButton) {
  zoomOutButton.addEventListener("click", decreaseFontSize);
}

function playSiren() {
  const sirenAudio = document.getElementById("siren-sound");

  // 오디오 재생
  sirenAudio.play();

  // 5초 후 재생 중단
  setTimeout(() => {
    sirenAudio.pause(); // 재생 중단
    sirenAudio.currentTime = 0; // 오디오를 처음으로 되돌림
  }, 5000); // 5000ms = 5초
}

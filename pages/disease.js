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

  if (age >= 20) {
    benefits.push("2년마다 무료 건강 검진(무료)");
  }

  if (age >= 24) {
    benefits.push("이상지질혈증 검사 (남성: 만 24세 이상 4년마다)");
  }
  if (age >= 40) {
    benefits.push("이상지질혈증 검사 (여성: 만 40세 이상 4년마다)");
    benefits.push("B형 간염 검사 (만 40세에 1회, 보균자 및 면역자 제외)");
    benefits.push("치면세균막 검사 (만 40세에 포함)");
    if ([40, 50, 60, 70].includes(age)) {
      benefits.push(`생활습관 평가 (만 ${age}세)`);
    }
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
  
  const depressionTestAges = [20, 30, 40, 50, 60, 70];
  if (depressionTestAges.includes(age)) {
    benefits.push(`우울증 검사 (만 ${age}세)`);
  }

  if (age >= 20) {
    benefits.push("자궁경부암 검진 (여성: 만 20세 이상, 2년마다, 무료)");
  }

  if (benefits.length === 0) {
    benefits.push("현재 무료 검진 혜택이 없습니다.");
  }

  benefits.forEach((benefit) => {
    const listItem = document.createElement("li");
    listItem.textContent = benefit;
    benefitsList.appendChild(listItem);
  });

  resultsContainer.classList.remove("hidden");
}

let fontSize = 16;

function increaseFontSize() {
  fontSize += 2;
  updateFontSize();
}

function decreaseFontSize() {
  fontSize = Math.max(12, fontSize - 2);
  updateFontSize();
}

function updateFontSize() {
  const mainElement = document.querySelector("main");

  if (mainElement) {
    mainElement.style.fontSize = fontSize + "px";
  }
}

function updateFontSize() {
  const mainElement = document.querySelector("main");
  const contentElement = document.querySelector(".content");

  if (mainElement) {
    mainElement.style.fontSize = fontSize + "px";
  }

  if (contentElement) {
    contentElement.style.width = "600px";
  }
}

const zoomInButton = document.querySelector(".zoomin");
if (zoomInButton) {
  zoomInButton.addEventListener("click", increaseFontSize);
}

const zoomOutButton = document.querySelector(".zoomout");
if (zoomOutButton) {
  zoomOutButton.addEventListener("click", decreaseFontSize);
}

function playSiren() {
  const sirenAudio = document.getElementById("siren-sound");

  sirenAudio.play();

  setTimeout(() => {
    sirenAudio.pause();
    sirenAudio.currentTime = 0;
  }, 5000);
}
let isKeypadVisible = false;

function toggleKeypad() {
    const keypad = document.getElementById('keypad');
    isKeypadVisible = !isKeypadVisible;
    keypad.classList.toggle('hidden', !isKeypadVisible);
}

function addToInput(value) {
    const ageInput = document.getElementById('age');
    ageInput.value = ageInput.value + value;
}

function clearInput() {
    const ageInput = document.getElementById('age');
    ageInput.value = '';
}

function removeLast() {
    const ageInput = document.getElementById('age');
    ageInput.value = ageInput.value.slice(0, -1);
}

function checkBenefits() {
    const age = parseInt(document.getElementById('age').value, 10);
    const benefitsList = document.getElementById('benefits-list');
    const resultsContainer = document.getElementById('benefits-results');
    benefitsList.innerHTML = '';

    if (isNaN(age) || age <= 0) {
        alert('올바른 나이를 입력하세요.');
        return;
    }

    const benefits = [];
    if (age >= 20) {
        benefits.push('2년마다 무료 건강 검진(국민건강보험 가입자)');
    }
    if (age >= 40 && age < 50) {
        benefits.push('간암 검진');
        benefits.push('대장암 검진');
    }
    if (age >= 50 && age < 60) {
        benefits.push('위암 검진');
        benefits.push('폐암 검진');
    }
    if (age >= 60) {
        benefits.push('유방암 검진');
        benefits.push('치매 검사');
    }
    if (benefits.length === 0) {
        benefits.push('현재 무료 검진 혜택이 없습니다.');
    }

    benefits.forEach(benefit => {
        const listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
    });

    resultsContainer.classList.remove('hidden');
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
    const mainElement = document.querySelector('main'); // main 태그 선택
    const contentElement = document.querySelector('.content'); // content 선택

    if (mainElement) {
        mainElement.style.fontSize = fontSize + 'px'; // main의 글씨 크기 조정
    }

    if (contentElement) {
        contentElement.style.width = '600px'; // content 크기 고정
    }
}


// + 버튼 클릭 이벤트 연결
const zoomInButton = document.querySelector('.zoomin'); // + 버튼 클래스
if (zoomInButton) {
    zoomInButton.addEventListener('click', increaseFontSize);
}

// - 버튼 클릭 이벤트 연결
const zoomOutButton = document.querySelector('.zoomout'); // - 버튼 클래스
if (zoomOutButton) {
    zoomOutButton.addEventListener('click', decreaseFontSize);
}

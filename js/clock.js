const calendar = document.querySelector(".calendar");
const clock = document.querySelector(".clock");
//각각의 시간, 분, 초를 먼저 문자열로 변환.
//그리고 그 문자열이 2자리 미만인 경우 앞에 0을 추가하도록 -> 그 후 #clock의 내용을 각각의 대응 시간으로 변환
function getHour() {
  const date = new Date();
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const housr = String(date.getHours()).padStart(2, "0");
  const minuts = String(date.getMinutes()).padStart(2, "0");
  calendar.innerText = `${month}. ${day}`;
  clock.innerText = `${housr}:${minuts}`;
}

//setInterval을 통해 매 1초마다 함수를 반복.
//처음 페이지를 로드 했을때 1초의 인터발이 주어지므로 바로 함수를 시작하도록 함.
function init() {
  getHour();
  setInterval(getHour, 1000);
}

init();

//setInterval(a,b) 함수: a에 적힌 함수를 b에 적힌 밀리초만큼
//기다렸다가 정해진 밀리초에 따라 반복

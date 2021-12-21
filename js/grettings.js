const mainScreen = document.querySelector(".main-screen");
const logInPage = document.querySelector(".log-in-page");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const removeBtn = document.querySelector("#remove");
//반복되는 문자열을 변수로 지정. -오타로 인한 오류 확률 감소
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const pageIn = "page-in";
const pageOut = "page-out";

const savedUserName = localStorage.getItem(USERNAME_KEY);

//#greeting과 #removeBtn에 주어진 display: hidden을 함수가 실행 되었을때
//hidden 클래스를 삭제해서 보이도록
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  removeBtn.classList.remove(HIDDEN_CLASSNAME);
}

//submit의 기본 동작인 새로고침을 방지. 로그인을 위해 이름을 입력하는 폼이 submit 되었을 때 hidden 클래스를 부여해서 보이지 안도록
//그 후 인풋창에 입력된 값을 브라우저의 로컬 스토리이제 저장. 그리고 paintGreetings 함수 실행
function onLoginSubmit(event) {
  event.preventDefault();
  logInPage.classList.add(pageOut);
  logInPage.classList.remove(pageIn);
  logInPage.classList.add(HIDDEN_CLASSNAME);
  mainScreen.classList.add(pageIn);
  mainScreen.classList.remove(pageOut);
  mainScreen.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

//로그아웃 버튼을 눌렀을때 로컬 스토리지 내의 저장된 유저네임을 삭제하고 페이지를 새로고침
//이에 따라 다시 로그인 창으로 갈 수 있도록 설정
function onLogOutBtn() {
  localStorage.removeItem(USERNAME_KEY);
  logInPage.classList.add(pageIn);
  logInPage.classList.remove(HIDDEN_CLASSNAME);
  logInPage.classList.remove(pageOut);
  mainScreen.classList.add(pageOut);
  mainScreen.classList.remove(pageIn);
  mainScreen.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = null;
}
//사이트에 접속, 새로고침, 재접속 했을때 로컬 스토리지 내에 유저네임을 가져오고 그 값이 null인지 확인
//값이 null인 경우 form의 hidden 클래스를 삭제해 로그인 창이 보이도록.
//값이 null이 아닌 경우는 panitGreetings 함수를 실행하도록.
if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUserName);
  logInPage.classList.add(HIDDEN_CLASSNAME);
}

//reoveBtn의 버튼에서 클릭 이벤트가 발생했을 때 저장된 함수를 실행하도록 설정.
removeBtn.addEventListener("click", onLogOutBtn);

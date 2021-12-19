const body = document.querySelector("body");
const numberOfImg = [
  "background-0",
  "background-1",
  "background-2",
  "background-3",
];

//이미지 파일을 html에 추가하는 함수
//new Image로 이미지 파일 로딩 및 경로와 클래스 설정. 그 후  body에 삽입
function paintImage(imgNumber) {
  const image = new Image();
  image.src = `assets/background-${imgNumber}.jpg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

//array내의 배경 사진 항모들의 숫자를 기반으로 랜덤하게 숫자를 생성.
//floor함수를 통해 소수점 자리를 삭제. 4이상의 숫자가 나오기를 원하지 않으므로 floor사용
//그리고 나온 숫자를 padintImage의 변수로 사용해 경로를 확정.
function init() {
  const randomNumber = Math.floor(Math.random() * numberOfImg.length);
  paintImage(randomNumber);
}

init();

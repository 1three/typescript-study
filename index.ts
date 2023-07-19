/* 
  html 조작
  document.getElementById()
*/
let 제목 = document.querySelector("#title");

// 제목.innerHTML = "안녕"; // Error: Element | null
// Narrowing
if (제목 instanceof HTMLElement) {
  제목.innerHTML = "안녕";
}

/*
  <a/>: HTMLAnchorElement
  <img/>: HTMLImageElement
  <h4/>: HTMLHeadingElement
*/
let 링크 = document.querySelector("#link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://kakao.com";
}

// ?.: option
// let 버튼 = document.getElementById("button");
// 버튼?.addEventListener("click", function () {
//   console.log("안녕");
// });

let 이미지 = document.getElementById("image");
if (이미지 instanceof HTMLImageElement) {
  이미지.src = "new.jpg";
}

// document.querySelectorAll(".className"): Select All class(className)
let 에이 = document.querySelectorAll(".naver");
에이.forEach((x) => {
  if (에이 instanceof HTMLAnchorElement) {
    에이.href = "https://kakao.com";
  }
});

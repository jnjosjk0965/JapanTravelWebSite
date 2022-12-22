/*
   1)사이드바 만들기 ( 메뉴 들어갔다 나왔다.)
   2)모달 만들기 (상위 레이어)
   3)스크롤바 따라다니는 네비게이션 바
   4)서로 다른 내용 보여주는 탭
   5)이미지 슬라이더
   6)계속 바뀌는 배경
*/
//사이드바
// const navi = document.querySelector("#nav");
// navi.addEventlstener("click",naviToggle);
// function naviToggle() {
    
// }

//시계
const clock = document.querySelector("#clock h1");

let getClock = function(){
   const realTime = new Date();
   const hours =   String(realTime.getHours()).padStart(2,"0");
   const minutes = String(realTime.getMinutes()).padStart(2,"0");
   const seconds = String(realTime.getSeconds()).padStart(2,"0");
   clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
getClock();
setInterval(getClock,1000);


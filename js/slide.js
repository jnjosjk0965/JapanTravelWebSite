//index 사진 슬라이드
const slideBox = document.querySelectorAll(".slide_box"); //슬라이드 div 박스
const slideMargin = 100; //슬라이드간의 margin 값
const slideWidth = 600; //슬라이드 컨텐츠 width 값

slideBox.forEach(function (item) {
    let currentIndex = 0; //현재 슬라이드 index
    const slides = item.querySelector(".slides"); // 슬라이드 전체 ul
    const prev = item.querySelector('.prev'); //이전 버튼
    const next = item.querySelector('.next'); //다음 버튼
    const slide = slides.querySelectorAll("li"); //ul 기준으로 각 슬라이드
    const slideCount = slide.length; //슬라이드의 갯수

    function moveSlide(index){
        slides.style.left = `${-(index * (slideWidth + slideMargin))}px`;
        currentIndex = index;
    }
    slides.style.width = `${(slideWidth + slideMargin) * slideCount }px`;//전체 슬라이드 컨테이너 넓이 설정
    prev.addEventListener('click',()=>{
        if(currentIndex) moveSlide(currentIndex - 1); //현재슬라이드가 제일 처음 슬라이드인 경우 작동 X
    });
    next.addEventListener('click',()=>{
        if(currentIndex !== slideCount - 1) moveSlide(currentIndex + 1); //마지막 슬라이드에선 작동 X
    });
});
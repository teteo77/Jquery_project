window.onload = function () {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    
    // 세로로 움직이게 한다.
    direction: 'vertical',

    // 가로로 움직이게 한다.
    // direction: 'horizontal',
    loop: true, //슬라이드 반복 여부
    
    // swiper 자동재생 다음페이지 넘어가는 시간 1000에 1초
    autoplay: {
      delay: 2000,
    },

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },

    // 슬라이드 몇게 표시할건지 표시
    // breakpoints: {
    //   // 화면의 넓이가 320px 이상일 때
    //   640: {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    // },

  });
};
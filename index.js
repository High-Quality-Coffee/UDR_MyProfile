document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section"); //섹션 쿼리셀렉
  const navLinks = document.querySelectorAll(".nav-link"); //액티브 쿼리셀렉

  const options = {
    threshold: 1, // 섹션의 70프로가 화면에 들어오면 콜백 함수 실행
  };

  navLinks.forEach(function (link) {
    //클릭시 active 클래스 제거/추가
    link.addEventListener("click", function () {
      // 기존 active 클래스 제거
      navLinks.forEach(function (nav) {
        nav.classList.remove("active");
      });
      // 새로운 액티브 클래스 추가
      this.classList.add("active");
    });
  });

  //페이지 섹션이 뷰포트에 들어오면 콜백 실행
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.getAttribute("id");

        // 액티브 클래스 제거
        navLinks.forEach((link) => {
          link.classList.remove("active");
        });

        // 현재 섹션 가져오기
        const activeLink = document.querySelector(
          `.nav-link[href="#${sectionId}"]`
        );
        // 현재 섹션에 맥티브 클래스 추가
        if (activeLink) {
          activeLink.classList.add("active");
        }
      }
    });
  }, options);

  // 섹션별로 뷰포트에 들어오는지 나가는지 확인
  sections.forEach((section) => {
    observer.observe(section);
  });
});

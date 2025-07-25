// main.js - v1.01

document.addEventListener('DOMContentLoaded', function () {
  const banner = document.querySelector('.banner-container');
  if (banner) {
    banner.addEventListener('scroll', () => {
      const scrollLeft = banner.scrollLeft;
      const scrollWidth = banner.scrollWidth;
      const clientWidth = banner.clientWidth;

      // 마지막 슬라이드에서 글씨 잘림 방지
      if (scrollLeft + clientWidth >= scrollWidth - 2) {
        banner.scrollLeft = scrollWidth - clientWidth;
      }
    });
  }

  // 검색창: 검색어 입력 여부 확인
  const searchBtn = document.querySelector('.search-btn');
  const searchInput = document.querySelector('.search-input');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      const keyword = searchInput.value.trim();
      if (!keyword) {
        alert('검색어를 입력해주세요.');
      } else {
        alert(`"${keyword}"에 대한 검색 결과가 없습니다.`);
      }
    });
  }
});

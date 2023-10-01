// 탭 버튼과 탭 내용 부분들을 querySelectorAll을 사용해 변수에 담는다.
const tabItem = document.querySelectorAll(".mc4_menu_li");
const tabContent = document.querySelectorAll(".mc4_content");

// 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
// 이때 index도 같이 가져온다.
tabItem.forEach((item, index) => {
  // 탭 버튼에 클릭 이벤트를 준다.
  item.addEventListener("click", (e) => {
    // 탭 버튼들을 forEach 문을 통해 한번씩 순회한다.
    tabItem.forEach((item) => {
      // 탭 버튼들의 active 클래스를 제거한다.
      item.classList.remove("mc4_menu_select");
    });
    // 클릭한 index의 탭 버튼에 active 클래스를 추가한다.
    tabItem[index].classList.add("mc4_menu_select");

    // 탭 버튼의 id값을 string으로 가져온다.
    const tabItemId = String(item.id);
    // 탭 내용 부분들을 forEach 문을 통해 한번씩 순회한다.
    tabContent.forEach((item, index) => {
      // 탭 내용 부분들 전부 active 클래스를 제거한다.
      item.classList.remove("mc4_menu_select");

      // 탭 내용의 id값을 string으로 가져온다.
      const tabContentId = String(item.id);
      // 만약 탭 버튼의 id 값과 탭 내용의 id값이 같다면,
      // 해당 탭 내용에 active 클래스를 추가한다.
      if (tabContentId === tabItemId) {
        tabContent[index].classList.add("mc4_menu_select");
      }
    });
  });
});

export function scrollToTop() {
  document.querySelector(".main-container")?.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

export function scrollToBottom() {
  var mainContainerEle = document.querySelector(".main-container");
  mainContainerEle?.scrollTo({
    top: mainContainerEle?.scrollHeight,
    behavior: "smooth",
  });
}

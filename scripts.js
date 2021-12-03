var btn = document.getElementsByClassName("collapse-button");
var ans = document.getElementsByClassName("answer");

for (let i = 0; i < btn.item.length; i++) {
  btn[i].onclick = function () {
    ans[i].classList.toggle(".active");
  };
}

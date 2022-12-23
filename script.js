function headerChange() {
  let headerNode = document.querySelector("header");
  let specialLinkNode = document.querySelector(
    "header .container nav .special-link"
  );
  if (window.scrollY >= 466) {
    headerNode.style.transition = "all 300ms";
    headerNode.style.backgroundColor = "white";
    specialLinkNode.style.backgroundColor = "#1A8917";
  } else {
    headerNode.style.backgroundColor = "#FFC017";
  }
}

window.onscroll = headerChange;

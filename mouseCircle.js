document.addEventListener("DOMContentLoaded", () => {
  let mousePosX = 0,
    mousePosY = 0,
    defaultCursor = document.querySelector(".mouse-circle"),
    exploreCursor = document.querySelector(".exploreCircle"),
    mouseCircle = defaultCursor,
    project = document.querySelector(".webSite");

  document.onmousemove = (e) => {
    mousePosX = e.pageX;
    mousePosY = e.pageY;
  };

  let delay = 6,
    revisedMousePosX = 0,
    revisedMousePosY = 0;

  function delayMouseFollow() {
    requestAnimationFrame(delayMouseFollow);

    revisedMousePosX += (mousePosX - revisedMousePosX) / delay;
    revisedMousePosY += (mousePosY - revisedMousePosY) / delay;

    if (mouseCircle == defaultCursor) {
      mouseCircle.style.top = revisedMousePosY + 10 + "px";
      mouseCircle.style.left = revisedMousePosX + 10 + "px";
    } else if (mouseCircle == exploreCursor) {
      mouseCircle.style.top = revisedMousePosY - 75 + "px";
      mouseCircle.style.left = revisedMousePosX - 75 + "px";
    }
  }
  delayMouseFollow();

  /*Text around cursor when hovering over Web projects*/
  project.addEventListener("mouseover", (e) => {
    mouseCircle = exploreCursor;
    defaultCursor.style.opacity = 0;
    exploreCursor.style.opacity = 1;
    exploreCursor.style.display = "block";
  });

  project.addEventListener("mouseout", (e) => {
    mouseCircle = defaultCursor;
    defaultCursor.style.opacity = 1;
    exploreCursor.style.opacity = 0;
  });
});

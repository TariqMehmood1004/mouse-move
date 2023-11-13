
let cursor = document.querySelector("#Cursor");
let cursorStyle = cursor.style;

document.addEventListener("mousemove", e => {
    // console.log(e.clientX);
    // console.log(e.clientY);

    cursorStyle.top = `${e.clientY - cursor.offsetHeight/2}px`;
    cursorStyle.left = `${e.clientX - cursor.offsetWidth/2}px`;
});
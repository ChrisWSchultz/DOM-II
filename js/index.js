// Your code goes here
const introHeader = document.querySelector('.intro>h2');
introHeader.addEventListener('mousedown', () => {
    introHeader.style.color = "red";
});
introHeader.addEventListener('mouseup', () => {
    introHeader.style.color = "black";
});

const introParagraph = document.querySelector('.intro>p');
introParagraph.addEventListener('mouseenter', () => {
    introParagraph.style.color = "green";
});
introParagraph.addEventListener('mouseleave', () => {
   introParagraph.style.color = "black";
});

const homeBackground = document.querySelector('.home');
homeBackground.addEventListener('dblclick', () => {
    homeBackground.style.backgroundColor = "blue";
});

const contentText = document.querySelector('.content-section');
window.addEventListener('load', () => {
    contentText.style.color = "orange";
});

const resizeWindow = document.querySelector('.destination');
window.addEventListener('resize', () => {
    resizeWindow.style.color = "purple";
});

const imgBorderRadius = document.querySelector('.intro>img');
window.addEventListener('keypress', () => {
    imgBorderRadius.style.borderRadius = "50px";
});

const mouseOver = document.querySelector('.logo-heading');
mouseOver.addEventListener('mouseover', () => {
    mouseOver.style.color = "white";

    setTimeout(() => {
        mouseOver.style.color = "";
    }, 600);

});

const clickText = document.querySelector('.content-destination>p');
window.addEventListener( 'click', () => {
    clickText.style.color = "white";

    setTimeout(() => {
        clickText.style.color = "";
    }, 600);
});
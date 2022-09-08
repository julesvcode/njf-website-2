

// window.addEventListener('load', () => {
//     const watermark = document.getElementsByClassName("substack-watermark");
//     console.log(watermark);
// });

window.onload = function() {
    const myIframe = document.getElementById("iframe-id");
    const divElement = myIframe.contentWindow.document.querySelector(".substack-watermark");
    divElement.style.display = "none";
};
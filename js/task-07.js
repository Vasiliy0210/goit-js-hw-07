// ------------------HW-7__task--07

const fontSizeControl = document.querySelector('#font-size-control');
const userText = document.querySelector('#text');

fontSizeControl.addEventListener('input', changeFontSizeControl)

function changeFontSizeControl(e) {
    let fontSize = e.currentTarget.value;
    userText.style.fontSize = `${fontSize}px`
}




let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function (data) {
    console.log('data.color: ', data.color);
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});
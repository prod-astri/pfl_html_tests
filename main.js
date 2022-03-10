manageHeaderSize()

window.onresize = () => {
    manageHeaderSize()
}

function manageHeaderSize() {
    let w = window.innerWidth
    if (w < 400){
        document.getElementById('headerButtons').innerHTML = 
        '<img src="/pictures/burger.svg" id="burger" style="width: 1.8rem"/>'
    } else if (w >= 400){
        document.getElementById('headerButtons').innerHTML = 
        '<button id="statsButton">stats</button>\
        <button id="starsButton">STARS</button>\
        <button id="bassButton">B A S S</button>'
    };
    if ( w < 630) {
        document.getElementById('headerButtons').style.flexDirection = 'column'
    } else if ( w > 630 ){
        document.getElementById('headerButtons').style.flexDirection = 'row'
    }
}

document.getElementById("burger").onclick = function() {
    console.log('burger')
};



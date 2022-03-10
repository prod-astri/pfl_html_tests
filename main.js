manageHeaderSize()

window.onresize = () => {
    manageHeaderSize()
}

function manageHeaderSize() {
    let w = window.innerWidth
    if (w < 400){
        document.getElementById('headerButtons').className = 'btn noDisplay'
        document.getElementById('burger').className = 'live'
    } else if (w >= 400){
        document.getElementById('headerButtons').className = 'btn live'
        document.getElementById('burger').className = 'noDisplay'
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

document.body.onscroll = trackScrolling

function trackScrolling() {
    let bodyScrolled = document.body.getBoundingClientRect().top
    if (bodyScrolled < -10) {
        document.getElementsByTagName('header')[0].className = 'closeCorner'
     } else {
            document.getElementsByTagName('header')[0].className = 'openCorner'
        }
//     // the value of getBoundingClientRect().top will always be negative
//     // percentage of the page scrolled
//     let worldState.scrolledFromTop = bodyScrolled / (textHeight) * -100;
//     console.log('wstate scrolled:' , worldState.scrolledFromTop)
    console.log('bodyscrolled' , bodyScrolled)
//     // the division factor is arbitrary for now
//     // camera.position.y = worldState.scrolledFromTop * worldState.max3dHeight / 100
  }
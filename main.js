manageHeaderSize()

window.onresize = () => {
    manageHeaderSize()
}

function manageHeaderSize() {
    let w = window.innerWidth
    if (w < 400 || document.body.getBoundingClientRect().top < -10 ){ 
        console.log('wo')
        document.getElementById('headerButtons').className = 'btn noDisplay'
        document.getElementById('burger').className = 'live '
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
        document.getElementsByTagName('header')[0].className = ' fadeOut closeCorner'
     } else {
            document.getElementsByTagName('header')[0].className = 'fadeIn openCorner '
        }
        manageHeaderSize();
  }
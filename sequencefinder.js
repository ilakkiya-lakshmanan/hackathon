var score = 0;
var blinkarr = [];
var clickarr = [];

function resetAnimate() {
    let qua1 = document.getElementById("qua1");
    qua1.setAttribute("class", "quarter-circle-top-left");

    let qua2 = document.getElementById("qua2");
    qua2.setAttribute("class", "quarter-circle-top-right");

    let qua3 = document.getElementById("qua3");
    qua3.setAttribute("class", "quarter-circle-bottom-left");

    let qua4 = document.getElementById("qua4");
    qua4.setAttribute("class", "quarter-circle-bottom-right");
}
//start
function start() {
    next();
}
function reset() {

    console.log('inside reset');
    resetAnimate();

    blinkarr = [];
    clickarr = [];
    score = 0;
    let scoreh5 = document.getElementById("score");
    let scoreh5text = document.createTextNode(score);
    scoreh5.removeChild(scoreh5.childNodes[0]);
    scoreh5.appendChild(scoreh5text);
}
function clickEvt(num) {
    // console.log(num, "is clicked");

    clickarr.push(num); 
    console.log("Clickarr - ",clickarr);

    let blinktxt = blinkarr.join("");
    let clicktxt = clickarr.join("");

    if(blinkarr.length===clickarr.length){
        if( blinktxt === clicktxt) {
            score++;
            clickarr=[];
            let scoreh5 = document.getElementById("score");
            let scoreh5text = document.createTextNode(score);
            scoreh5.removeChild(scoreh5.childNodes[0]);
            scoreh5.appendChild(scoreh5text);
            resetAnimate();
            next();
        } else {
            if (score == 0) {
                alert("Please click start button !!")
            } else {
                alert("Game Over!!!\n Your score is " + score);
            }
            reset();
        }
    }else{
        resetAnimate();
        
    }
    
}

function next() {
    resetAnimate();
    let number = Math.round(Math.random() * 3 + 1);
    blinkarr.push(number);
    console.log("Blinkarr - ",blinkarr);

    switch (number) {
        case 1: {
            let qua1 = document.getElementById("qua1");
            qua1.setAttribute("class", "quarter-circle-top-left animate");
            break;
        }
        case 2: {
            let qua2 = document.getElementById("qua2");
            qua2.setAttribute("class", "quarter-circle-top-right animate");
            break;
        }
        case 3: {
            let qua4 = document.getElementById("qua4");
            qua4.setAttribute("class", "quarter-circle-bottom-right animate");
            break;
        }
        case 4: {
            let qua3 = document.getElementById("qua3");
            qua3.setAttribute("class", "quarter-circle-bottom-left animate");
            break;
        }
    }
    // console.log(number);
}
function sequencefinder() {
    //Division1- Block_container
    let div1 = document.createElement("div");
    div1.setAttribute("class", "block_container");
    // Top-left
    let qua1 = document.createElement("div");
    qua1.setAttribute("id", "qua1");
    qua1.setAttribute("onclick", "clickEvt(1)");
    let qua1p=document.createElement("p");
    qua1p.setAttribute("class","circletext");
    let qua1text=document.createTextNode("1");
    qua1p.appendChild(qua1text);
    qua1.appendChild(qua1p);
    qua1.setAttribute("class", "quarter-circle-top-left");
    div1.appendChild(qua1);
    //Top-right
    let qua2 = document.createElement("div");
    qua2.setAttribute("id", "qua2");
    qua2.setAttribute("onclick", "clickEvt(2)");
    let qua2p=document.createElement("p");
    qua2p.setAttribute("class","circletext");
    let qua2text=document.createTextNode("2");
    qua2p.appendChild(qua2text);
    qua2.appendChild(qua2p)
    qua2.setAttribute("class", "quarter-circle-top-right");
    div1.appendChild(qua2);
    document.body.appendChild(div1);
    //Division2-block Container
    let div2 = document.createElement("div");
    div2.setAttribute("class", "block_container");
    //Bottom-Left
    let qua3 = document.createElement("div");
    qua3.setAttribute("id", "qua3");
    qua3.setAttribute("onclick", "clickEvt(4)");
    let qua3p=document.createElement("p");
    qua3p.setAttribute("class","circletext");
    let qua3text=document.createTextNode("4");
    qua3p.appendChild(qua3text);
    qua3.appendChild(qua3p)
    qua3.setAttribute("class", "quarter-circle-bottom-left");
    div2.appendChild(qua3);
    //Bottom_Right
    let qua4 = document.createElement("div");
    qua4.setAttribute("id", "qua4");
    qua4.setAttribute("onclick", "clickEvt(3)");
    let qua4p=document.createElement("p");
    qua4p.setAttribute("class","circletext");
    let qua4text=document.createTextNode("3");
    qua4p.appendChild(qua4text);
    qua4.appendChild(qua4p);
    qua4.setAttribute("class", "quarter-circle-bottom-right");
    div2.appendChild(qua4);
    document.body.appendChild(div2);
    //Division 3
    let div3 = document.createElement("div");
    div3.setAttribute("class", "block_container");
    //Button-Start
    let btn1 = document.createElement("button");
    btn1.setAttribute("class", "button_class");
    btn1.setAttribute("onclick", "start()");
    let btntext1 = document.createTextNode(" START ");
    btn1.appendChild(btntext1);
    div3.appendChild(btn1);
    

    //Score
    let scoreh5 = document.createElement('h1');
    scoreh5.setAttribute("id", "score");
    let scoreh5text = document.createTextNode(score);
    scoreh5.appendChild(scoreh5text);
    div3.appendChild(scoreh5);
//Button-Reset
    let btn2 = document.createElement("button");
    btn2.setAttribute("class", "button_class");
    let btntext2 = document.createTextNode(" RESET ");
    btn2.appendChild(btntext2);
    div3.appendChild(btn2);
    document.body.appendChild(div3);

    

}

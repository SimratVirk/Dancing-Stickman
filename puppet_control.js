function respondToInput() {
    setPositions(getAllParameters());
}


function getAllParameters() {
    return {
        rArm: Number(document.getElementById("rArmInput").value),
        bArm: Number(document.getElementById("bArmInput").value),
        rLeg: Number(document.getElementById("rLegInput").value),
        bLeg: Number(document.getElementById("bLegInput").value),
        pos: Number(document.getElementById("figureInput").value)
    }
}

function setPositions(p) {
    let obj = p;
    let rArm = document.querySelector("#redArm")
    rArm.setAttribute("transform", "rotate(" + obj.rArm + ")")
    let bArm = document.querySelector("#blueArm")
    bArm.setAttribute("transform", "rotate(" + obj.bArm + ")")
    let rLeg = document.querySelector("#redLeg")
    rLeg.setAttribute("transform", "rotate(" + obj.rLeg + ")")
    let bLeg = document.querySelector("#blueLeg")
    bLeg.setAttribute("transform", "rotate(" + obj.bLeg + ")")
    let figure = document.querySelector("#figure")
    let pos = obj.pos;
    figure.setAttribute("transform", "translate(" + pos + " 0)")
}



let positions = [];


function savePosition() {
    positions.push(getAllParameters())
    document.getElementById("message").innerHTML = positions.length
}


function reset() {
    positions = []
    document.getElementById("message").innerHTML = 0;
}


let timer = false;
var i = 0;
var set;
function startPlayBack() {
    timer = true;
    set = setInterval(function () { setPositions(positions[i]); i++; if (i == positions.length) { i = 0 }; }, 1000 / 15);
}


function stopPlayBack() {
    timer = false;
    clearInterval(set);
}

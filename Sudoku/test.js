var loesung =[
    [8,4,5,9,2,6,7,1,3],
    [3,1,9,8,4,7,6,5,2],
    [7,6,2,3,5,1,8,9,4],
    [6,5,7,4,3,2,1,8,9],
    [9,3,1,7,8,5,4,2,6],
    [2,8,4,1,6,9,3,7,5],
    [1,7,3,5,9,4,2,6,8],
    [5,2,8,6,1,3,9,4,7],
    [4,9,6,2,7,8,5,3,1]
];

var th = document.querySelectorAll(".row>th")

var counter = 0;
var thcounter = 0;

document.addEventListener("DOMContentLoaded",function () {
    generateNumbers()

})

function generateSolution() {

}

function checkRow() {

}

function checkColumn() {

}
function f() {
    for(var i = 0; i < loesung.length; i++) {
        checking(i)

    }
}

function checking(i) {
    for(var k = 0; k < loesung[i].length; k++){
        //console.log("Loesung an der Stelle i k: " + loesung[i][k])
        if(i > 0 && k == 0){
            thcounter += 9;
        }
        console.log("Thcounter: " +thcounter)

        if(loesung[i][k] == th[k + thcounter].textContent){
            counter++;
            console.log("Hier der Counter:" + counter)
        }
        console.log("Th an der Stelle i k:" + th[k + thcounter].textContent)
        console.log("Loesung an der Stelle i k: "+ loesung[i][k])
    }
}

function generateNumbers() {

    var ersteDimension = Math.floor(Math.random() * 9) +1;
    console.log(ersteDimension)
    var zweiteDimension = Math.floor(Math.random() * 9) +1;
    console.log(zweiteDimension)
}

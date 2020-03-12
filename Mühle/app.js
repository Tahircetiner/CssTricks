var firstStones = document.getElementsByClassName("firstStone");
var itemOfFirstStone = 0;
var secondStones = document.getElementsByClassName("secondStones")
var itemOfSecondStone = 0;
var whiteIsDrawing = true;

window.onclick = function (ev) {
    console.log("pixel x-achse : " + ev.pageX);
    console.log("pixel y-achse : " + ev.pageY);
}

function setStone(area) {
    console.log("###########"+whiteIsDrawing)
    var splitIntoArray =  area.getAttribute("coords").split(",");

    console.log("Existiert es nicht?:"  +!checkIfStoneIsSet(area));
    if(!checkIfStoneIsSet(area)){

        if(whiteIsDrawing && itemOfFirstStone < 9){
            area.setAttribute("data-index",0)

            firstStones.item(itemOfFirstStone).style.position = "absolute";
            firstStones.item(itemOfFirstStone).style.left =splitIntoArray[0] + "px";
            firstStones.item(itemOfFirstStone).style.top = splitIntoArray[1] + "px";
            itemOfFirstStone++;


            whiteIsDrawing = false;

        }
        else if(!whiteIsDrawing && itemOfSecondStone < 9){
            area.setAttribute("data-index",1)
            secondStones.item(itemOfSecondStone).style.position = "absolute";

            secondStones.item(itemOfSecondStone).style.left = splitIntoArray[0] + "px";
            secondStones.item(itemOfSecondStone).style.top = splitIntoArray[1] +"px";

            itemOfSecondStone++;

            whiteIsDrawing = true;
        }
    }
}

function checkIfStoneIsSet(area) {
    var alreadyExists = false;

    if(area.getAttribute("data-index") == 0 || area.getAttribute("data-index") == 1){
        console.log("existiert bereits")
        alreadyExists = true;
    }
    return alreadyExists;
}

function checkPoints() {

}